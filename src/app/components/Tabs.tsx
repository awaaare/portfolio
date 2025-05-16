'use client'

import { useState } from 'react'
import Image from 'next/image';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("About")

  const renderContent = () => {
    switch (activeTab) {
      case "About":
        return (
          <div key="about" className="tab-content fade-in text-white">
            In development
          </div>
        )
      case "Skills":
        return (
          <div key="skills" className="tab-content skills-container fade-in flex flex-wrap gap-3 justify-center mt-0">
            {['JavaScript', 'TypeScript', 'C++', 'NodeJS', 'NextJS', 'React'].map((skill) => (
              <div 
                key={skill} 
                className="skill-item flex items-center justify-center gap-2 bg-white/20 px-4 py-1 rounded-lg text-white text-base transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <Image
                  src={`/images/${skill.toLowerCase()}.png`} 
                  alt={`${skill} Icon`} 
                  className="w-7 h-7"
                />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        )
      case "Projects":
        return (
          <div key="projects" className="tab-content fade-in text-white">
            In development
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="tabs rounded-2xl px-8 py-9 mt-[-27px] mb-4 max-h-full overflow-y-auto">
      <div className="tab-buttons w-full flex justify-center items-center gap-3 mx-auto w-fit">
        {["About", "Skills", "Projects"].map((tab) => (
          <button
            key={tab}
            className={`flex items-center gap-2 border-none ${
                activeTab === tab ? 'bg-white/70 hover:scale-105' : 'bg-white/20 hover:scale-105'
            } text-white px-4 py-2 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-white/40 hover:scale-105`}
            onClick={() => setActiveTab(tab)}
          >
            <Image
              src={`/images/${tab.toLowerCase()}.png`} 
              alt={`${tab} Icon`} 
              className="w-5 h-5"
            />
            {tab}
          </button>
        ))}
      </div>

      <h2 
        key={`tab-title-${activeTab}`} 
        className="tab-title text-center text-xl font-bold my-5 mx-auto w-fit relative left-[-4px] text-white fade-in transition-transform duration-500 ease-in-out hover:scale-110"
      >
        {activeTab}
      </h2>

      <div 
        key={activeTab} 
        className="tab-content-container w-[calc(100%-32px)] bg-white/20 rounded-[25px] p-5 transition-transform duration-500 ease-in-out mx-auto fade-in"
      >
        {renderContent()}
      </div>
    </div>
  )
}