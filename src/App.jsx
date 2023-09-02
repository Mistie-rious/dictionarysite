import { useRef, useState } from 'react'
import axios from 'axios'
import classNames from 'classnames'
import './App.css'
import Content from './Content'
import Header from './Header'
import Extras from './Extras'
import search from './assets/search.png'


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
      <nav className='  justify-between flex align-middle ' >
    <div className={classNames(" text-indigo-300 my-4 font-extrabold  mb-10 flex  ",{
      'text-white': isSelected
    })}>
     Dictionary App 
     
     </div>
     <div onClick={() => setIsSelected(!isSelected)} className={classNames('flex rounded-full my-4 transition-all items-center duration-700 bg-slate-400 w-20 h-10',{
      'bg-white':isSelected,
      
     })}>
      <span className={classNames('bg-slate-100 rounded-full   transition-all duration-500 w-8 h-8',{
      'bg-slate-500': isSelected,
      'ml-11': isSelected,
      'ml-1': !isSelected
      
      })}></span>
     </div>

     </nav>
     
     
      
       
       <div>
        <div className='flex items-center'>
       <input type='text' onKeyDown={(e) => {
    if (e.key === 'Enter') {
      getWord()}}} onSubmit={getWord} value={word} placeholder='Type...' onChange={(e) => saveWord(e.target.value)} className={classNames(' text-black transition ease-in duration-150 w-full h-10 rounded-lg border-none outline-none px-3 py-4 shadow-sm bg-slate-100',{
        'bg-gray-400 ': isSelected
       })} ></input>
       <button onClick={getWord}  className={classNames(' transition ease-in-out delay-400 px-3 py-4 -mx-14 border-none rounded-lg ',
       {

       })}>
        <img src={search} className='' width={18} />
       </button>
       </div>
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
