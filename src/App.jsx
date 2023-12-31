import Typewriter from 'typewriter-effect'
import Confetti from 'react-confetti'
import { motion } from "framer-motion"
import useWindowSize from 'react-use/lib/useWindowSize'
import { wishes } from './assets/data/wishes'
import { useState } from 'react'
import { useRef } from 'react'
import { data } from 'autoprefixer'
import html2canvas from 'html2canvas'
import {saveAs} from 'file-saver'

function App() {
  const { width, height } = useWindowSize()

  const [visible, setVisible] = useState(false)

  const containerRef = useRef(null)

  document.addEventListener('mousemove', (e) => {
    const rotatingWishes = document.querySelectorAll('.rotating-wish');

    rotatingWishes.forEach((wish) => {
      const rect = wish.getBoundingClientRect();
      const centerX = rect.left + rect.width / 6;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const angle = Math.atan2(deltaY, deltaX);
      const rotation = angle * (180 / Math.PI);
    });

  });


  const saveAsPNG = ()=>{
    window.print({
      background: true,
      title: 'Happy Birthday'
    })
  }

  setTimeout(()=>{
    setVisible(true)
  }, 33000)



  return (

    <div ref={containerRef} onClick={saveAsPNG} className='w-screen h-screen text-center bg-black  text-white relative overflow-y-scroll  custom-cursor'
    //  style={{ background: `url(/bg.svg)` }}
     >
        <audio src="/club.mp3" autoPlay >
        
        </audio>
      <Confetti numberOfPieces={500} width={width} height={height * 3} />

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 3, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        {/* <div className="absolute animate-bounce left-[10rem] top-[4rem] border p-4 rounded-xl shadow-xl border-pink-500">
          <button onClick={saveAsPNG}>Click me</button>
        </div> */}
        <div className='py-4'>
          
          <div className='flex justify-center pb-12 gap-12'>
            <img src="/celia.png" alt="" className=' w-[15rem] h-[17rem] mbfth' />
            <img src="/prince.png" alt="" className=' w-[15rem] h-[17rem] mbfth' />
          </div>

          <h1 className='text-6xl font-bold font-["Macondo"] ' >The twins' BD (Prince & Celia) 🎉🥳🎂</h1>
        </div>
      </motion.div>
      <p className='text-2xl px-[20vw]'>
        <Typewriter options={{ delay : 20}}
          onInit={(typewriter) => {
            typewriter
                .typeString("Happy Birthday! 🎂")
                .typeString("<br/>")
                .pauseFor(2500)
                .typeString(
                    "On this special occasion, We want to take a moment to celebrate both of you, the remarkable individuals you both are. 🌟"
                )
                .typeString("<br/>")
                .typeString("<br/>")
                .typeString(
                    "May the day ahead be brimming with laughter, love, and unforgettable moments for both of you. Wishing the upcoming year to unfold with boundless opportunities, happiness, and success. 🌈"
                )
                .pauseFor(2500)
                .typeString(
                    "May your hearts dance with joy, your smiles radiate brightness, and your spirits soar in eternal freedom. 🥳"
                )
                .pauseFor(2500)
                .typeString("<br/>")
                .typeString("<br/>")
                .typeString("En este día especial, celebro a ambos, personas maravillosas. Que tengan un día lleno de alegría, amor y momentos inolvidables. Que el próximo año les traiga muchas oportunidades y felicidad. ¡Felicidades! 🌟🥳 ")
                .typeString("<b>--@Dush</b>")
                .typeString("<br/>")
                .typeString("<br/>")
                .typeString(`On your special day , <b>Celia</b> and <b>Prince</b> 🧑‍🤝‍🧑, may the world be as bright and joyful as the smiles you bring.
                Here's to another year of shared moments, laughter that echoes, and the warmth of family bonds.
                Mbifurije kuba munzu y' uwiteka the rest of your life. 🙏Zaburi 27:4 🙏 More years, more blessings
                Happy Birthday to my amazing twins! Always remember that your special mother Loves you  a lot 🎊🎁🎂 `)
                .typeString("<b> --@Mummy Benie</b>")
      
                .callFunction(() => {})
                .start();
          }}
        />
      </p>
  
      <div className='w-[20vw] h-[40vh] bg-red-500/10 absolute left-40 top-0 blur-3xl' />
      <div className='w-[20vw] h-[20vh] bg-blue-200/20 absolute right-40 blur-3xl' />
      <div className='w-[20vw] h-[20vh] bg-green-200 absolute bottom-10 left-40 blur-[200px]' />
      <img src="/ballons.png" alt="" className='w-[10rem] fixed bottom-0 left-0 mbfth' />
      <img src="/ballons2.png" alt="" className='w-36 fixed top-16 right-16 mbfth' />
      <img src="/bouquet.webp" alt="" className='w-64 fixed bottom-0 right-10 mbfth ' />

      <div  className={`wishes transition-all duration-200 ${visible?"grid":"hidden"} grid-flow-row md:grid-cols-2 grid-cols-1 gap-4 px-24 mt-12 pb-12`}>
        {wishes.map((wish, index) => (
          <div key={index} ref={containerRef} onClick={saveAsPNG} className={`wishDiv shadow-md bg-black/20 rounded-bl-[30px] rounded-tr-[30px] pt-4 rounded-tl-lg rounded-br-lg backdrop-blur-lg p-2 border border-white/30 h-auto`}>
            <div className="">
              <span dangerouslySetInnerHTML={{__html: `"${wish.wish}"`}}></span>
            </div>
            <div className="mt-4">
              <span className='text-lg font-bold'>{wish.from}</span>
            </div>
          </div>
        ))}
      </div>

      <p className='fixed w-full text-center bottom-0'>@Josephs gen - 2023</p>

    </div>

  )
}

export default App
