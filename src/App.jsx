import { useRef, useState } from 'react'
import axios from 'axios'
import classNames from 'classnames'
import './App.css'
import Content from './Content'
import Header from './Header'
import Extras from './Extras'


function App() {
  
  const [isSelected, setIsSelected] = useState(false)
  const [word, setWord] = useState("")
  const [results, setResults] = useState([null])
  
  const themes = () => {

    isSelected: isSelected
    
  }


  const saveWord = (value) => {
    setWord(value)
    console.log(value)
  
  }

  const getWord = async() => {
   const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  

   setResults(response.data[0])
  

  }
  console.log(results)

  const heading = () => {
    if (results && results.phonetics && results.phonetics.length > 0) {
      const audio = results.phonetics.find((phone) => phone.audio !== "");
      if (audio) {
        return {
          audioUrl: audio.audio,
          word: results.word,
          phonetic: results.phonetic,
        };
      }
    }
    // Return a default object or handle the case where data is not available
    return {
      audioUrl: "",
      word: "",
      phonetic: "",
    };
  };
  


  return (
    <>
      <div className={classNames(' min-h-screen max-h-fit mx-auto px-10 ',{
      'bg-black': isSelected,
      'text-white':isSelected
})}>
      <nav className=' container justify-between flex align-middle ' >
    <div className={classNames(" text-background my-4 font-extrabold  mb-10 flex  ",{
      'text-lightblue': isSelected
    })}>
     Dictionary App 
     
     </div>
     <div onClick={() => setIsSelected(!isSelected)} className={classNames('flex rounded-full my-4 transition-all duration-500 bg-slate-400 w-20 h-10',{
      'bg-white':isSelected,
      
     })}>
      <span className={classNames('bg-slate-100 rounded-full transition-all duration-500 w-10 h-10',{
      'bg-slate-500': isSelected,
      'ml-10': isSelected
      })}></span>
     </div>

     </nav>
     <div className='font-light'>Enter your Word here!</div>
     
      
       
       <div>
       <input type='text' onSubmit={getWord} value={word} placeholder='Type...' onChange={(e) => saveWord(e.target.value)} className={classNames(' text-black transition ease-in duration-150 w-full h-10 rounded-lg border-none outline-none px-3 py-3 bg-slate-100',{
        'bg-gray-300 ': isSelected
       })} ></input>
       <button onClick={getWord}  className={classNames('transition ease-in-out delay-400 hover:bg-gray-500 px-3 -mx-20  my-1 w-20 h-10 border-none bg-gray-400 rounded-lg ',
       {
        'bg-gray-200': isSelected,
        'text-black': isSelected
       })}>Submit</button>
       
       </div>
      
       
       <Header {...heading()}  isSelected={isSelected}/>
        {results?.meanings?.length > 0 && results.meanings.map((items,index) => (
          
          <div key={index}  >
             
          <Content {...items} isSelected={isSelected}/>
            <Extras {...items}/>
            </div>
        ))
        }
      </div>

    </>
  )
}

export default App
