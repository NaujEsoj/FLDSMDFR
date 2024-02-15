import {useState} from 'react'

function TermsGen() {
  const [includesInput, setIncludesInput] = useState('')
  const [notIncludedInput, setNotIncludedInput] = useState('')
  const [termsInput, setTermsInput] = useState('')
  const [includesOutput, setIncludesOutput] = useState('')
  const [notIncludedOutput, setNotIncludedOutput] = useState('')
  const [termsOutput, setTermsOutput] = useState('')
  const [output, setOutput] = useState('')
  const [completeTerms, setCompleteTerms] = useState(null)
  const [activeCopy, setActiveCopy] = useState(null)
  const [copySuccessful, setCopySuccessful] = useState('Copy')

  const formatText = (text) => {
    text = text.split(/\r?\n/)
    //const result = text.map(x => x.replace(/[^\x00-\x7F]/g,"").trim());
    const result = text.map(x => x.replace(/[^\x00-\xFF]/g,"").replace(/\s\s+/g, ' ').replace(/2A/g,'').trim());
    let condList = ''
    result.forEach(e => {
    condList += `<li>${e}</li>
`
    })
    setIncludesOutput(condList)
  }



  const handleIncludesInput = (e) => {
    setIncludesInput(e.target.value.trim())
    setActiveCopy('null')
    setCopySuccessful('copy')
  }

  const formatIncludes = () => {
    formatText(includesInput)
  }


  const eraseText =  () => {
    setIncludesInput('')
    setIncludesOutput('')
  }


  return (
    <>
      <div className='bg-neutral flex p-2'>
        <label htmlFor="" className='p-1.5'>Complete Terms?</label>
        <input type="checkbox" onClick={() => {setCompleteTerms(prevCheck => !prevCheck)}} />
      </div>
      <div className='flex bg-neutral'>
        <div className='flex flex-col w-1/2 bg-secondary m-8'>
          <label htmlFor="" className='m-1'>Includes:</label>
          <div className='m-auto w-11/12 flex justify-center'>
            <textarea name="" className='textarea w-full m-4' id="" cols="20" rows="5" placeholder='Input text Here' value={includesInput} onChange={handleIncludesInput} />
          </div>
          <div className='flex'>
            <button className='btn btn-accent w-1/2' onClick={eraseText}>Erase</button>
            <button className='btn btn-primary w-1/2' onClick={formatIncludes}>Format Text</button>
          </div>
        </div>
        <div className='flex flex-col w-1/2 bg-secondary m-8'>
          <label htmlFor="" className='m-1'>Terms Output:</label>
          <div className='m-auto w-11/12 flex justify-center'>
            <textarea name="" className='textarea w-full m-4' id="" cols="20" rows="5" placeholder='Output Shows Here' disabled value={includesOutput}/>
          </div>
          <button className={activeCopy ? 'btn btn-success' : 'btn btn-secondary'} onClick={() => {navigator.clipboard.writeText(includesOutput); setCopySuccessful('Copied!'); setActiveCopy(true)}}>{copySuccessful}</button>
        </div>
      </div>

      {completeTerms &&
        <>
          <div className='flex bg-neutral'>
            <div className='flex flex-col w-1/2 bg-secondary m-8'>
              <label htmlFor="" className='m-1'>Includes:</label>
              <div className='m-auto w-11/12 flex justify-center'>
                <textarea name="" className='textarea w-full m-4' id="" cols="20" rows="5" placeholder='Output Shows Here' value={includesInput}/>
              </div>
              <button className='btn btn-primary' >Format Text1</button>
            </div>
            <div className='flex flex-col w-1/2 bg-secondary m-8'>
              <label htmlFor="" className='m-1'>Terms Output:</label>
              <div className='m-auto w-11/12 flex justify-center'>
                <textarea name="" className='textarea w-full m-4' id="" cols="20" rows="5" placeholder='Output Shows Here' disabled onChange={(e) => {setIncludesInput(e.target.value)} }/>
              </div>
              <button className='btn btn-warning'>Copy</button>
            </div>
          </div>
          <div className='flex bg-neutral'>
            <div className='flex flex-col w-1/2 bg-secondary m-8'>
              <label htmlFor="" className='m-1'>Includes:</label>
              <div className='m-auto w-11/12 flex justify-center'>
                <textarea name="" className='textarea w-full m-4' id="" cols="20" rows="5" placeholder='Output Shows Here' value={includesInput}/>
              </div>
              <button className='btn btn-primary' >Format Text1</button>
            </div>
            <div className='flex flex-col w-1/2 bg-secondary m-8'>
              <label htmlFor="" className='m-1'>Terms Output:</label>
              <div className='m-auto w-11/12 flex justify-center'>
                <textarea name="" className='textarea w-full m-4' id="" cols="20" rows="5" placeholder='Output Shows Here' disabled onChange={(e) => {setIncludesInput(e.target.value)} }/>
              </div>
              <button className='btn btn-warning'>Copy</button>
            </div>
          </div>
        </>
      }

      {/* <div className='flex bg-neutral'>
        <div className='flex flex-col w-1/2 bg-secondary m-8'>
          <label htmlFor="" className='m-1'>Includes:</label>
          <div className='m-auto w-11/12 flex justify-center'>
            <textarea name="" className='textarea w-full m-4' id="" cols="20" rows="5" placeholder='Output Shows Here' onChange={handleIncludes} value={includesInput}/>
          </div>
          <button className='btn btn-primary' onClick={cookIncludes}>Format Text1</button>
        </div>
        <div className='flex flex-col w-1/2 bg-secondary m-8'>
          <label htmlFor="" className='m-1'>Terms Output:</label>
          <div className='m-auto w-11/12 flex justify-center'>
            <textarea name="" className='textarea w-full m-4' id="" cols="20" rows="5" placeholder='Output Shows Here' disabled onChange={(e) => {setIncludesInput(e.target.value)} }/>
          </div>
          <button className='btn btn-warning'>Copy</button>
        </div>
      </div>
      <div className='flex bg-neutral'>
        <div className='flex flex-col w-1/2 bg-secondary m-8'>
          <label htmlFor="" className='m-1'>Includes:</label>
          <div className='m-auto w-11/12 flex justify-center'>
            <textarea name="" className='textarea w-full m-4' id="" cols="20" rows="5" placeholder='Output Shows Here' onChange={handleIncludes} value={includesInput}/>
          </div>
          <button className='btn btn-primary' onClick={cookIncludes}>Format Text2</button>
        </div>
        <div className='flex flex-col w-1/2 bg-secondary m-8'>
          <label htmlFor="" className='m-1'>Terms Output:</label>
          <div className='m-auto w-11/12 flex justify-center'>
            <textarea name="" className='textarea w-full m-4' id="" cols="20" rows="5" placeholder='Output Shows Here' disabled onChange={(e) => {setIncludesInput(e.target.value)} }/>
          </div>
          <button className='btn btn-warning'>Copy</button>
        </div>
      </div> */}
    </>
  )
}

export default TermsGen
