import React from 'react'

function Extras({synonyms, antonyms}) {
  return (
    <div>
        {synonyms?.length > 0 &&( 
        <>
      <h1 className='font-bold'>Synonyms</h1>
      <hr></hr>
       {synonyms.map((sym,index) =>(
        <span key={index}>
            {sym}
            {index < synonyms.length - 1 && ', '}
            </span>
       ))}
       </>
       )}

{antonyms.length > 0 && (
  <>
    <h1 className='font-bold'>Antonym</h1>
    <hr></hr>
    {antonyms.map((aym,index) => (
      <span key={index}>{aym}
      {index < antonyms.length - 1 && ', '}
      </span>
    ))}
  </>
)}
    </div>
  )
}

export default Extras