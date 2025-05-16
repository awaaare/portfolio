'use client'
/** @jsxImportSource @emotion/react */

import { useEffect } from 'react'
import * as SimplexNoiseModule from 'simplex-noise';
const SimplexNoise = (SimplexNoiseModule as any).default || SimplexNoiseModule;

// TypeScript типы
declare global {
  interface Window {
    SimplexNoise: {
      new (): {
        noise3D: (x: number, y: number, z: number) => number;
      };
    };
    TAU: number;
  }
}

export default function CanvasBackground() {
  useEffect(() => {
    const circleCount = 150;
    const circlePropCount = 8;
    const circlePropsLength = circleCount * circlePropCount;
    const baseSpeed = 0.1;
    const rangeSpeed = 1;
    const baseTTL = 150;
    const rangeTTL = 200;
    const baseRadius = 100;
    const rangeRadius = 200;
    const rangeHue = 60;
    const xOff = 0.0015;
    const yOff = 0.0015;
    const zOff = 0.0015;
    const backgroundColor = 'hsla(0,0%,5%,1)';

    let container: HTMLElement;
    let canvas: { a: HTMLCanvasElement; b: HTMLCanvasElement };
    let ctx: { 
      a: CanvasRenderingContext2D; 
      b: CanvasRenderingContext2D 
    };
    let circleProps: Float32Array;
    let simplex: {
      noise3D: (x: number, y: number, z: number) => number;
    };
    let baseHue: number;

    window.TAU = 2 * Math.PI;

    // Функции из util.js
    const rand = (n: number) => n * Math.random();
    const fadeInOut = (t: number, m: number) => {
      const hm = 0.5 * m;
      return Math.abs((t + hm) % m - hm) / (hm);
    };

    function initCircles() {
      circleProps = new Float32Array(circlePropsLength);
      simplex = new SimplexNoise();
      baseHue = 220;

      for (let i = 0; i < circlePropsLength; i += circlePropCount) {
        initCircle(i);
      }
    }

    function initCircle(i: number) {
      const x = rand(canvas.a.width);
      const y = rand(canvas.a.height);
      const n = simplex.noise3D(x * xOff, y * yOff, baseHue * zOff);
      const t = rand(window.TAU);
      const speed = baseSpeed + rand(rangeSpeed);
      const vx = speed * Math.cos(t);
      const vy = speed * Math.sin(t);
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const radius = baseRadius + rand(rangeRadius);
      const hue = baseHue + n * rangeHue;

      circleProps.set([x, y, vx, vy, life, ttl, radius, hue], i);
    }

    function createCanvas() {
      container = document.querySelector('.content--canvas') as HTMLElement;
      canvas = {
        a: document.createElement('canvas'),
        b: document.createElement('canvas')
      };
      
      canvas.b.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
      `;
      
      container.appendChild(canvas.b);
      
      ctx = {
        a: canvas.a.getContext('2d')!,
        b: canvas.b.getContext('2d')!
      };
    }

    function resize() {
      const { innerWidth, innerHeight } = window;
      
      canvas.a.width = innerWidth;
      canvas.a.height = innerHeight;
      ctx.a.drawImage(canvas.b, 0, 0);
      
      canvas.b.width = innerWidth;
      canvas.b.height = innerHeight;
      ctx.b.drawImage(canvas.a, 0, 0);
    }

    function draw() {
      ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);
      ctx.b.fillStyle = backgroundColor;
      ctx.b.fillRect(0, 0, canvas.b.width, canvas.b.height);
      updateCircles();
      render();
      requestAnimationFrame(draw);
    }

    function updateCircles() {
      baseHue++;
      for (let i = 0; i < circlePropsLength; i += circlePropCount) {
        updateCircle(i);
      }
    }

    function updateCircle(i: number) {
      const x = circleProps[i];
      const y = circleProps[i + 1];
      const vx = circleProps[i + 2];
      const vy = circleProps[i + 3];
      const life = circleProps[i + 4];
      const ttl = circleProps[i + 5];
      const radius = circleProps[i + 6];
      const hue = circleProps[i + 7];

      drawCircle(x, y, life, ttl, radius, hue);

      circleProps[i] = x + vx;
      circleProps[i + 1] = y + vy;
      circleProps[i + 4] = life + 1;

      if (checkBounds(x, y, radius) || life > ttl) {
        initCircle(i);
      }
    }

    function drawCircle(x: number, y: number, life: number, ttl: number, radius: number, hue: number) {
      ctx.a.save();
      ctx.a.fillStyle = `hsla(${hue},60%,30%,${fadeInOut(life, ttl)})`;
      ctx.a.beginPath();
      ctx.a.arc(x, y, radius, 0, window.TAU);
      ctx.a.fill();
      ctx.a.closePath();
      ctx.a.restore();
    }

    function checkBounds(x: number, y: number, radius: number) {
      return (
        x < -radius ||
        x > canvas.a.width + radius ||
        y < -radius ||
        y > canvas.a.height + radius
      );
    }

    function render() {
      ctx.b.save();
      ctx.b.filter = 'blur(50px)';
      ctx.b.drawImage(canvas.a, 0, 0);
      ctx.b.restore();
    }

    createCanvas();
    resize();
    initCircles();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (container && canvas.b) {
        container.removeChild(canvas.b);
      }
    };
  }, []);

  return <div className="content--canvas"></div>;
}