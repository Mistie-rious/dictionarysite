import React, { useRef } from 'react'
import Play1 from './assets/play.png'
import Play2 from './assets/play.png'
import classNames from 'classnames';

function Header({phonetic, word, audioUrl, isSelected}) {
    const ref = useRef();

    const playMusic = () => {
        ref.current.play();
    }
  return (
    <div className='my-2'>  
        
     <div className='flex justify-between'>
       <div className='font-bold'>{word}
       <span className='font-thin  block'>{phonetic}
     </span>
       </div>
       {!isSelected ? (
       <button onClick={playMusic} className={classNames('bg-indigo-100 h-10 w-10   flex-shrink-0  flex flex-row items-center justify-center transition ease-in-out delay-150  rounded-full ',{
        
       })}>
        <img src={Play1}  width={18} ></img>
       </button> ) : (
        <button onClick={playMusic} className={classNames('  bg-indigo-200 h-10 w-10 flex-shrink-0 justify-center flex flex-row items-center   transition ease-in-out delay-150  rounded-full ',{
        
        })}>
         <img src={Play2} width={18} ></img>
        </button>
       )
}
       <audio className='hidden' src={audioUrl} ref={ref}></audio>
       </div>
     </div>
     
  )
}

export default Header