import Tabs from '@/components/Tabs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="app w-full max-w-[1440px] min-h-screen mx-auto flex justify-center items-center relative">
      <div className="box w-[500px] h-[700px] bg-[#4d90fe] rounded-[50px] p-8 shadow-[0_0_15px_0_rgba(255,255,255,0.8)] relative mt-[-85px] flex flex-col z-10">
        <div className="profile text-center mt-4 mb-4">
          <img
            src="/images/avatar.png" 
            alt="Avatar" 
            className="avatar w-32 h-32 rounded-full block mx-auto transition-transform duration-300 ease-in-out hover:scale-105 shadow-[0_0_10px_2px_rgba(255,255,255,0.7)]" 
          />
          <span className="nickname block mt-4 text-2xl text-black text-shadow-[0_0_3px_#fff] transition-transform duration-500 ease-in-out hover:scale-110">
            aware
          </span>
          <div className="gradient-stripe h-1 shadow-[0_0_4px_0_rgba(255,255,255,0.8)] bg-gradient-to-r from-[#2e7df3] to-[#3a93e6] my-5 mx-4 rounded" />
        </div>
        
        <Tabs />
      </div>
      
      <Footer />
    </div>
  )
}