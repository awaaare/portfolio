import Image from 'next/image';

export default function SocialButtons() {
  return (
    <div className="social-buttons flex gap-4 mb-4">
      {/* Telegram */}
      <div className="relative group">
        <a
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button telegram w-10 h-10 rounded-full flex justify-center items-center relative transition-all duration-300 hover:scale-110 shadow-[0_0_8px_rgba(255,255,255,0.4)] bg-telegram border border-telegram hover:bg-[#0077b3]"
        >
          <Image src="/images/telegram.png" alt="Telegram" className="w-6 h-6" />
        </a>
        <span className="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          my telegram
        </span>
      </div>

      {/* GitHub */}
      <div className="relative group">
        <a
          href="https://github.com/awaaare"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button github w-10 h-10 rounded-full flex justify-center items-center relative transition-all duration-300 hover:scale-110 shadow-[0_0_8px_rgba(255,255,255,0.4)] bg-github border border-github hover:bg-[#242424]"
        >
          <Image src="/images/github.png" alt="GitHub" className="w-6 h-6" />
        </a>
        <span className="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          my github
        </span>
      </div>

      {/* Discord */}
      <div className="relative group">
        <a
          href="https://discord.gg/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button discord w-10 h-10 rounded-full flex justify-center items-center relative transition-all duration-300 hover:scale-110 shadow-[0_0_8px_rgba(255,255,255,0.4)] bg-discord border border-discord hover:bg-[#677bc4]"
        >
          <Image src="/images/discord.png" alt="Discord" className="w-6 h-6" />
        </a>
        <span className="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          my discord
        </span>
      </div>
    </div>
  )
}