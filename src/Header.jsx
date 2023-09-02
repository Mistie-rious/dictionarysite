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
    <div>  
        
     <div className='flex justify-between'>
       <div className='font-bold'>{word}
       <span className='font-thin  block'>{phonetic}
     </span>
       </div>
       {!isSelected ? (
       <button onClick={playMusic} className={classNames('  flex-shrink-0 w-10 flex   h-10 transition ease-in-out delay-150  rounded-full ',{
        
       })}>
        <img src={Play1}  className='w-18 h-8 items-center justify-center '></img>
       </button> ) : (
        <button onClick={playMusic} className={classNames('  flex-shrink-0 w-10 flex   h-10 transition ease-in-out delay-150  rounded-full ',{
        
        })}>
         <img src={Play2}  className='w-18 h-8 items-center justify-center '></img>
        </button>
       )
}
       <audio className='hidden' src={audioUrl} ref={ref}></audio>
       </div>
     </div>
     
  )
}

export default Header