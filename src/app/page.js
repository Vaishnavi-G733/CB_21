"use client"
import { useRef } from "react"
import Image from "next/image"
import localFont from "next/font/local"

const ClimateCrisis = localFont({
  src: "../../public/fonts/Climate_Crisis/ClimateCrisis-Regular-VariableFont_YEAR.ttf",
})

const Honk = localFont({
  src: "../../public/fonts/Honk/Honk-Regular-VariableFont_MORF,SHLN.ttf",
})

const Micro5 = localFont({
  src: "../../public/fonts/Micro_5/Micro5-Regular.ttf",
})

const Nabla = localFont({
  src: "../../public/fonts/Nabla/Nabla-Regular-VariableFont_EDPT,EHLT.ttf",
})

const ComicNeue = localFont({
  src: "../../public/fonts/Comic_Neue/ComicNeue-Regular.ttf",
})

const songs = [
  "Smelly cat",
  "Boyfriend",
  "Watermelon Sugar",
  "Sweater Weather",
  "Teri Meri - our remix",
  "Anything JB",
]

export default function Home() {
  const confettiRef = useRef(null)

  const handleMouseMove = (event) => {
    if (!confettiRef.current) return

    for (let i = 0; i < 3; i++) {
      const container = confettiRef.current
      const confetti = document.createElement("div")
      confetti.classList.add("confetti")
      container.appendChild(confetti)

      const randomX = Math.floor(Math.random() * 30)
      const randomY = Math.floor(Math.random() * 30)
      console.log(event)
      confetti.style.position = "absolute"
      confetti.style.left = `${event.pageX + randomX}px`
      confetti.style.top = `${event.pageY + randomY}px`

      const randomColor = Math.floor(Math.random() * 256)
      confetti.style.backgroundColor = `rgb(255, 255, ${randomColor})`

      setTimeout(() => {
        if (confetti.parentNode) {
          container.removeChild(confetti)
        }
      }, 500)
    }
  }

  return (
    <div
      ref={confettiRef}
      className='w-screen p-8 flex justify-center relative'
      onMouseMove={handleMouseMove}
    >
      <main className='w-full md:w-[820px] bg-stone-800 pixel-border flex flex-col items-center'>
        <div className='bg-[#d6dd70] stripes w-full md:h-40 flex flex-col md:flex-row justify-between items-center'>
          <div>
            <Image src='/girl.png' width='150' height='180' alt='' />
          </div>
          <div className='p-5'>
            <span className={`${Honk.className} text-4xl`}>
              LESSSGOOO
            </span>
            <h1
              className={`${ClimateCrisis.className} text-pink-400 uppercase text-6xl pixel-text`}
            >
              Chana's
            </h1>
            <h2
              className={`${ClimateCrisis.className} uppercase text-4xl pixel-text`}
            >
              21 Birthday
            </h2>
          </div>
          <div>
            <Image
              src='/party.gif'
              width='200'
              height='200'
              alt=''
              className='m-3'
            />
          </div>
        </div>
        <div className='grid md:grid-cols-[1fr_2fr_1fr] gap-3 p-3'>
          <div className='bg-[#f4ebd0] relative p-5 pixel-border flex flex-col justify-center items-center'>
            <Image
              src='/gojo.jpg'
              className='absolute top-0 z-0'
              alt='Capsule'
              width={170}
              height={160}
            />
            <h3
  className={`${ClimateCrisis.className} absolute bottom-0 right-0 z-10 text-right uppercase text-base pixel-text`}
>
  hello baby gorl
</h3>

            
          </div>
          <div className='pixel-border bg-red-500 p-5 flex flex-col items-center justify-between'>
            <h2
              className={`${ClimateCrisis.className} uppercase text-3xl pixel-text`}
            >
              Homecooked
            </h2>
            <div className='flex justify-between'>
              <div className='rounded-md bg-gradient-to-br from-yellow-100 to-yellow-400 border-yellow-600 border-4 drop-shadow-md'>
                <Image
                  src='/pizza.png'
                  alt='Capsule'
                  width={100}
                  height={100}
                />
              </div>
              <div className='rounded-md bg-gradient-to-br from-violet-100 to-violet-400 border-violet-600 border-4 drop-shadow-md'>
                <Image
                  src='/ravioli.png'
                  alt='Capsule'
                  width={100}
                  height={100}
                />
              </div>
              <div className='rounded-md bg-gradient-to-br from-sky-100 to-sky-400 border-sky-600 border-4 drop-shadow-md'>
                <Image
                  src='/noodles.png'
                  alt='Capsule'
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
          <div className='relative flex justify-center items-center'>
            <Image
              src='/kakashi.jpg'
              width='130'
              height='130'
              alt='Strawberry Vanilla Cake'
              className='w-fit'
            />
            <div
              className={`pixel-border absolute left-0 bottom-0 leading-4 bg-stone-400 w-1/2 ${Micro5.className} uppercase p-5 text-black text-xl`}
            >
              Yum Yum Cake
            </div>
          </div>
          <div className='p-2 pixel-border relative bg-gradient-to-b from-blue-500 to-sky-400 flex flex-col justify-center items-center'>
          <Image
              src='/sun.png'
              alt='Sun'
              width={80}
              height={80}
              className='absolute right-12 top-3 z-0'
            />
            <Image
              src='/cloud.png'
              alt='Cloud'
              width={100}
              height={100}
              className='absolute left-5 top-5 z-0'
            />
            <Image
              src='/cloud.png'
              alt='Cloud'
              width={130}
              height={130}
              className='absolute right-3 top-8 z-0'
            />
            <div className='bg-white pixel-border z-10 flex flex-col justify-center items-center p-1'>
              <h2
                className={`${ClimateCrisis.className} text-sky-200 uppercase text-3xl pixel-text`}
              >
                19 Feb
              </h2>
              <span className={`${Honk.className} text-3xl`}>2 PM</span>
            </div>
            <Image
              src='/building.jpg'
              alt='Building'
              width={130}
              height={130}
              className='h-56 w-auto md:w-full md:absolute bottom-0 z-0'
            />
          </div>
          <div className=' flex flex-col gap-3'>
            <div className='row-span-1 pixel-border  h-full p-5 bg-cyan-300 flex justify-between items-center'>
              <div className='bg-white pixel-border'>
                <Image
                  src='/cards.png'
                  alt='Capsule'
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h3
                  className={`${Nabla.className} text-center uppercase text-3xl pixel-text`}
                >
                  Drinking Games
                </h3>
              </div>
              <div className='bg-white pixel-border'>
                <Image src='/cups.png' alt='Capsule' width={100} height={100} />
              </div>
            </div>
            <div className='flex gap-3 justify-between h-full'>
              <div className='pixel-border bg-orange-500 p-5  w-full h-full flex flex-col justify-center items-center'>
                <span
                  className={`${ClimateCrisis.className} text-white text-xl`}
                >
                  Here's to
                </span>
                <span className={`${ComicNeue.className} font-bold`}>
                  Another year
                </span>
                <span className={`${ComicNeue.className} font-bold`}>
                  of Singleness
                </span>
              </div>
              <div className='pixel-border bg-emerald-500 p-5  w-full h-full flex justify-center items-center'>
              <button className='bg-gradient-to-b from-blue-300 to-blue-600 hover:from-blue-400 hover:to-blue-700 pixel-border rounded-full px-3 py-1 mt-5'>
              <a className={`${Honk.className} text-black text-xl`} href="https://youtu.be/dQw4w9WgXcQ?si=zCPjoUDCti4HIvwT">
                Click here for surprise
              </a>
            </button>
              </div>
            </div>
          </div>
          <div className='bg-yellow-200 pixel-border p-2'>
            <div className='bg-yellow-400 pixel-border p-2 flex flex-col justify-center items-center'>
              <h3
                className={`${ClimateCrisis.className} uppercase text-3xl pixel-text`}
              >
                Spotify
              </h3>
              <span
                className={`${ComicNeue.className} text-black text-center font-bold text-sm`}
              >
                Add your favourite chana songs!
              </span>
              <div className='h-[200px] overflow-y-scroll flex flex-col gap-2 old-scrollbar p-2'>
                {songs.map((song, index) => {
                  return (
                    <div
                      key={index}
                      className='bg-stone-400 pixel-border px-3 py-1'
                    >
                      <span
                        className={`${Micro5.className} text-black text-xl`}
                      >
                        {song}
                      </span>
                    </div>
                  )
                })}
              </div>

              <a
                href='https://open.spotify.com/playlist/2Mo2l7N2xBETfgxolsw3wU?si=e0dca039b180487a'
                className={`text-blue-500 ${ComicNeue.className} font-bold text-lg underline`}
              >
                Join Playlist
              </a>
            </div>
          </div>
          <div className={`h-80 relative flex`}>
            <Image
              alt='friends'
              src='/chandler.gif'
              width={100}
              height={100}
              className='md:absolute z-0 h-full w-auto md:w-full md:h-auto bottom-0'
            ></Image>
            <h3
              className={`${ClimateCrisis.className} z-10 text-center uppercase text-fuchsia-300 p-5 text-2xl pixel-text`}
            >
              Meet ya Sooon! OLDIE
            </h3>
          </div>
          <div className='pixel-border bg-stone-600  h-full flex justify-center items-center'>
          <Image
              src='/old.jpg'
              width='120'
              height='120'
              alt='Strawberry Vanilla Cake'
              className='w-full h-auto'
            />
          </div>
          <div className='pixel-border p-5 bg-pink-300 h-full flex flex-col justify-center items-center'>
            <h3
              className={`${Nabla.className} uppercase text-lime-500 text-3xl pixel-text`}
            >
              Photos
            </h3>
            <Image
              src='/drive.png'
              width='100'
              height='100'
              alt='Strawberry Vanilla Cake'
              className='w-24'
            />
            <div
              className={`pixel-border leading-4 bg-stone-400 ${Micro5.className} uppercase p-3 text-black text-xl`}
            >
              Find your moments or you can add em
            </div>
            <button className='bg-gradient-to-b from-blue-300 to-blue-600 hover:from-blue-400 hover:to-blue-700 pixel-border rounded-full px-3 py-1 mt-5'>
              <a className={`${Honk.className} text-black text-xl`} href="https://drive.google.com/drive/folders/1UlmpI-KFUDOQFiI6pJ6wG5FUqHtQ-wd_?usp=sharing">
                Add Photos
              </a>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
