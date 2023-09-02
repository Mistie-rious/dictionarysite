import classNames from 'classnames'
import React from 'react'

function Content({partOfSpeech, definitions, synonyms, antonyms, isSelected}) {
  return (
    <div>
        <h1 className={classNames('font-bold',{
          
        }
        )}>{partOfSpeech}</h1>
       <hr></hr>
      
       {definitions.map((def,index) =>
        (<li key={index}>{def.definition}</li>))}
      
      

     
    </div>
  )
}

export default Content