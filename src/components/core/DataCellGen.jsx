import { useState } from 'react'

function DateCellGen() {
  const [dataInput, setdataInput] = useState('')
  const [dataOBJ, setdataOBJ] = useState([])
  const [message, setMessage] = useState('')
  const [output, setOutput] = useState('')
  const [moneySymbol, setMoneySymbol] = useState('USD ')
  const [copySuccessful, setCopySuccessful] = useState('Copy')
  const [activeCopy, setActiveCopy] = useState(null)
  const [activeBypass, setActiveBypass] = useState(false)


  const handleChange = (e) => {
    setdataInput(e.target.value.trim())
    setMessage(null)
    setActiveCopy(null)
    setCopySuccessful('Copy')
  }

  const handleErase = () => {
    setdataInput('')
    setdataOBJ([])
    setOutput('')
    setActiveCopy(null)
    setCopySuccessful('Copy')
  }

  const handleES = () => {

    setActiveCopy(null)
    setCopySuccessful('Copy')
    let htmlText = ''

    if (dataInput === '') {
      setMessage('Please enter Data')
    }else if (activeBypass) {
      setMessage(null)
      let cells2 = []
      let rows = dataInput.split("\n")
      for(var y in rows) {
        var cellsSplitted = rows[y].split("\t")
        cells2.push(cellsSplitted)
      }
      cells2.forEach(e => {
        htmlText +=
     `<tr>
        <td>${e[0]}</td>
        <td>${e[1]}</td>
        <td><span class="precioTachado">${moneySymbol}${e[2]}</span></td>
        <td>${moneySymbol}${e[3]}</td>
      </tr>

     `
        })
        setOutput(htmlText)
    }else {
      let rows = dataInput.split("\n")
      for(y in rows) {
      var cells = rows[y].split("\t")
      let date1 = new Date(cells[0])
      let date2 = new Date(cells[1])
      cells[0] = date1
      cells[1] = date2
      dataOBJ.push(cells)
      }
      dataOBJ.forEach(e => {
        if (e[0].getTime() === e[1].getTime()) {
          const month = e[0].getMonth()
          htmlText +=
     `<tr>
        <td>Noche del ${e[0].getDate()} de ${monthNameES(month)} de ${e[0].getFullYear()} </td>
        <td>${e[2]}</td>
        <td><span class="precioTachado">${moneySymbol}${e[3]}</span></td>
        <td>${moneySymbol}${e[4]}</td>
      </tr>

     `
        }else if (e[0].getMonth() === e[1].getMonth()) {
          const month = e[0].getMonth()
          const day1 = '0' + e[0].getDate()
          const day2 = '0' + e[1].getDate()
          htmlText +=
     `<tr>
        <td>Del ${day1.slice(-2)} al ${day2.slice(-2)} de ${monthNameES(month)} de ${e[0].getFullYear()} </td>
        <td>${e[2]}</td>
        <td><span class="precioTachado">${moneySymbol}${e[3]}</span></td>
        <td>${moneySymbol}${e[4]}</td>
      </tr>

     `
        }else if (e[0].getMonth() !== e[1].getMonth()) {
          const month1 = e[0].getMonth()
          const month2 = e[1].getMonth()
          const day1 = '0' + e[0].getDate()
          const day2 = '0' + e[1].getDate()
          htmlText +=
     `<tr>
        <td>Del ${day1.slice(-2)} de ${monthNameES(month1)} al ${day2.slice(-2)} de ${monthNameES(month2)} de ${e[0].getFullYear()} </td>
        <td>${e[2]}</td>
        <td><span class="precioTachado">${moneySymbol}${e[3]}</span></td>
        <td>${moneySymbol}${e[4]}</td>
      </tr>

     `
        }
      })
    setOutput(htmlText)
    }
  }

  const handleEN = () => {

    setActiveCopy(null)
    setCopySuccessful('Copy')
    let htmlText = ''

    if (dataInput === '') {
      setMessage('Please enter Data')
    }else if (activeBypass) {
      setMessage(null)
      let cells2 = []
      let rows = dataInput.split("\n")
      for(var y in rows) {
        var cells = rows[y].split("\t")
        cells2.push(cells)
      }
      cells2.forEach(e => {
        htmlText +=
     `<tr>
        <td>${e[0]}</td>
        <td>${e[1]}</td>
        <td><span class="precioTachado">${moneySymbol}${e[2]}</span></td>
        <td>${moneySymbol}${e[3]}</td>
      </tr>

     `
        })
        setOutput(htmlText)
    }else {
      let rows = dataInput.split("\n")
      for(var en in rows) {
      var cellsEn = rows[en].split("\t")
      let date1 = new Date(cellsEn[0])
      let date2 = new Date(cellsEn[1])
      cellsEn[0] = date1
      cellsEn[1] = date2
      dataOBJ.push(cellsEn)
      }
      dataOBJ.forEach(e => {
        if (e[0].getTime() === e[1].getTime()) {
          const month = e[0].getMonth()
          htmlText +=
     `<tr>
        <td>Nigth of ${monthNameEN(month)} ${e[0].getDate()}, ${e[0].getFullYear()}</td>
        <td>${e[2]}</td>
        <td><span class="precioTachado">${moneySymbol}${e[3]}</span></td>
        <td>${moneySymbol}${e[4]}</td>
      </tr>

     `
        }else if (e[0].getMonth() === e[1].getMonth()) {
          const month = e[0].getMonth()
          const day1 = '0' + e[0].getDate()
          const day2 = '0' + e[1].getDate()
          htmlText +=
     `<tr>
        <td>From ${monthNameEN(month)} ${day1.slice(-2)} to ${day2.slice(-2)}, ${e[0].getFullYear()}</td>
        <td>${e[2]}</td>
        <td><span class="precioTachado">${moneySymbol}${e[3]}</span></td>
        <td>${moneySymbol}${e[4]}</td>
      </tr>

     `
        }else if (e[0].getMonth() !== e[1].getMonth()) {
          const month1 = e[0].getMonth()
          const month2 = e[1].getMonth()
          const day1 = '0' + e[0].getDate()
          const day2 = '0' + e[1].getDate()
          htmlText +=
     `<tr>
        <td>From ${monthNameEN(month1)} ${day1.slice(-2)} to ${monthNameEN(month2)} ${day2.slice(-2)}, ${e[0].getFullYear()}</td>
        <td>${e[2]}</td>
        <td><span class="precioTachado">${moneySymbol}${e[3]}</span></td>
        <td>${moneySymbol}${e[4]}</td>
      </tr>

     `
        }
      })
    setOutput(htmlText)
    }
  }

  const handleFR = () => {

    setActiveCopy(null)
    setCopySuccessful('Copy')
    let htmlText = ''

    if (dataInput === '') {
      setMessage('Please enter Data')
    }else if (activeBypass) {
      setMessage(null)
      let cells2 = []
      let rows = dataInput.split("\n")
      for(var y in rows) {
        var cells = rows[y].split("\t")
        cells2.push(cells)
      }
      cells2.forEach(e => {
        htmlText +=
     `<tr>
        <td>${e[0]}</td>
        <td>${e[1]}</td>
        <td><span class="precioTachado">${moneySymbol}${e[2]}</span></td>
        <td>${moneySymbol}${e[3]}</td>
      </tr>

     `
        })
        setOutput(htmlText)
    }else {
      let rows = dataInput.split("\n")
      for(var fr in rows) {
      var cellsFr = rows[fr].split("\t")
      let date1 = new Date(cellsFr[0])
      let date2 = new Date(cellsFr[1])
      cellsFr[0] = date1
      cellsFr[1] = date2
      dataOBJ.push(cellsFr)
      }
      dataOBJ.forEach(e => {
        if (e[0].getTime() === e[1].getTime()) {
          const month = e[0].getMonth()
          htmlText +=
     `<tr>
        <td>Nuit de ${e[0].getDate()} ${monthNameFR(month)} ${e[0].getFullYear()}</td>
        <td>${e[2]}</td>
        <td><span class="precioTachado">${moneySymbol}${e[3]}</span></td>
        <td>${moneySymbol}${e[4]}</td>
      </tr>

     `
        }else if (e[0].getMonth() === e[1].getMonth()) {
          const month = e[0].getMonth()
          const day1 = '0' + e[0].getDate()
          const day2 = '0' + e[1].getDate()
          htmlText +=
     `<tr>
        <td>Du ${day1.slice(-2)} au ${day2.slice(-2)} ${monthNameFR(month)} ${e[0].getFullYear()}</td>
        <td>${e[2]}</td>
        <td><span class="precioTachado">${moneySymbol}${e[3]}</span></td>
        <td>${moneySymbol}${e[4]}</td>
      </tr>

     `
        }else if (e[0].getMonth() !== e[1].getMonth()) {
          const month1 = e[0].getMonth()
          const month2 = e[1].getMonth()
          const day1 = '0' + e[0].getDate()
          const day2 = '0' + e[1].getDate()
          htmlText +=
     `<tr>
        <td>Du ${day1.slice(-2)} ${monthNameFR(month1)} au ${day2.slice(-2)} ${monthNameFR(month2)} ${e[0].getFullYear()} </td>
        <td>${e[2]}</td>
        <td><span class="precioTachado">${moneySymbol}${e[3]}</span></td>
        <td>${moneySymbol}${e[4]}</td>
      </tr>

     `
        }
      })
    setOutput(htmlText)
    }
  }

  const handlePT = () => {

    setActiveCopy(null)
    setCopySuccessful('Copy')
    let htmlText = ''

    if (dataInput === '') {
      setMessage('Please enter Data')
    }else if (activeBypass) {
      setMessage(null)
      let cells2 = []
      let rows = dataInput.split("\n")
      for(var y in rows) {
        var cells = rows[y].split("\t")
        cells2.push(cells)
      }
      cells2.forEach(e => {
        htmlText +=
     `<tr>
        <td>${e[0]}</td>
        <td>${e[1]}</td>
        <td><span class="precioTachado">${moneySymbol}${e[2]}</span></td>
        <td>${moneySymbol}${e[3]}</td>
      </tr>

     `
        })
        setOutput(htmlText)
    }else {
      let rows = dataInput.split("\n")
      for(var pt in rows) {
      var cellsPt = rows[pt].split("\t")
      let date1 = new Date(cellsPt[0])
      let date2 = new Date(cellsPt[1])
      cellsPt[0] = date1
      cellsPt[1] = date2
      dataOBJ.push(cellsPt)
      }
      dataOBJ.forEach(e => {
        if (e[0].getTime() === e[1].getTime()) {
          const month = e[0].getMonth()
          htmlText +=
     `<tr>
        <td>Noite de ${e[0].getDate()} de ${monthNamePT(month)} de ${e[0].getFullYear()}</td>
        <td>${e[2]}</td>
        <td><span class="precioTachado">${moneySymbol}${e[3]}</span></td>
        <td>${moneySymbol}${e[4]}</td>
      </tr>

     `
        }else if (e[0].getMonth() === e[1].getMonth()) {
          const month = e[0].getMonth()
          const day1 = '0' + e[0].getDate()
          const day2 = '0' + e[1].getDate()
          htmlText +=
     `<tr>
        <td>De ${day1.slice(-2)} a ${day2.slice(-2)} de ${monthNamePT(month)} de ${e[0].getFullYear()}</td>
        <td>${e[2]}</td>
        <td><span class="precioTachado">${moneySymbol}${e[3]}</span></td>
        <td>${moneySymbol}${e[4]}</td>
      </tr>

     `
        }else if (e[0].getMonth() !== e[1].getMonth()) {
          const month1 = e[0].getMonth()
          const month2 = e[1].getMonth()
          const day1 = '0' + e[0].getDate()
          const day2 = '0' + e[1].getDate()
          htmlText +=
     `<tr>
        <td>De ${day1.slice(-2)} de ${monthNamePT(month1)} a ${day2.slice(-2)} de ${monthNamePT(month2)} de ${e[0].getFullYear()} </td>
        <td>${e[2]}</td>
        <td><span class="precioTachado">${moneySymbol}${e[3]}</span></td>
        <td>${moneySymbol}${e[4]}</td>
      </tr>

     `
        }
      })
    setOutput(htmlText)
    }
  }



  const monthNameES = (num) => {

    switch (num) {
      case 0: return 'Enero';
        break;
      case 1: return 'Febrero';
        break;
      case 2: return 'Marzo';
        break;
      case 3: return 'Abril';
        break;
      case 4: return 'Mayo';
        break;
      case 5: return 'Junio';
        break;
      case 6: return 'Julio';
        break;
      case 7: return 'Agosto';
        break;
      case 8: return 'Septiembre';
        break;
      case 9: return 'Octubre';
        break;
      case 10: return 'Noviembre';
        break;
      case 11: return 'Diciembre';
        break;
      default: return 'Month Error';
    }
  }
  const monthNameEN = (num) => {
    switch (num) {
      case 0: return 'January'
        break
      case 1: return 'February'
        break
      case 2: return 'March'
        break
      case 3: return 'April'
        break
      case 4: return 'May'
        break
      case 5: return 'June'
        break
      case 6: return 'July'
        break
      case 7: return 'August'
        break
      case 8: return 'September'
        break
      case 9: return 'October'
        break
      case 10: return 'November'
        break
      case 11: return 'December'
        break
      default: return 'Month Error';
    }
  }

  const monthNameFR = (num) => {
    switch (num) {
      case 0: return 'janvier'
        break
      case 1: return 'février'
        break
      case 2: return 'mars'
        break
      case 3: return 'avril'
        break
      case 4: return 'mai'
        break
      case 5: return 'juin'
        break
      case 6: return 'juillet'
        break
      case 7: return 'août'
        break
      case 8: return 'septembre'
        break
      case 9: return 'octobre'
        break
      case 10: return 'novembre'
        break
      case 11: return 'décembre'
        break
      default: return 'Month Error';
    }
  }

  const monthNamePT = (num) => {
    switch (num) {
      case 0: return 'Janeiro'
        break
      case 1: return 'Fevereiro'
        break
      case 2: return 'Março'
        break
      case 3: return 'Abril'
        break
      case 4: return 'Maio'
        break
      case 5: return 'Junho'
        break
      case 6: return 'Julho'
        break
      case 7: return 'Agosto'
        break
      case 8: return 'Setembro'
        break
      case 9: return 'Outubro'
        break
      case 10: return 'Novembro'
        break
      case 11: return 'Dezembro'
        break
        default: return 'Month Error';
    }
  }

  return (
    <div className='flex block flex-wrap my-8 bg-neutral h-screen'>
      <div className='flex flex-col w-1/2 items-center block min-w-fit my-8'>
        <div className='m-1 flex flex-col justify-around block' >
          {message && <div className="alert alert-error shadow-lg">
                        <div className='flex'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          <span>Please enter something.</span>
                        </div>
                      </div>}
          <textarea rows="5" cols="60" className="textarea textarea-secondary textarea-bordered m-8" placeholder="Paste cells here" onChange={handleChange} value={dataInput}></textarea>
          <div className='flex justify-around items-center'>
            <div className='flex flex-col'>
              <label className="label flex justify-around ">
                <span className="label-text">Select language output:</span>
              </label>
              <div className="btn-group flex justify-center" >                
                <div className="btn btn-secondary m-1" onClick={handleES}>ES</div>
                <div className="btn btn-secondary m-1" onClick={handleEN}>EN</div>
                <div className="btn btn-secondary m-1" onClick={handleFR}>FR</div>
                <div className="btn btn-secondary m-1" onClick={handlePT}>PT</div>
              </div>
            </div>
            <button className="btn btn-secondary" onClick={handleErase}>Erase All</button>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-1/2 items-center block min-w-fit my-8'>
        <div className='m-1 block'>
          <div className='flex flex justify-around'>
          <div className='flex justify-center items-center'>
            <label htmlFor="" className='m-2'>Bypass Date</label>
            <input type="checkbox" className='m-2' onClick={() => {setActiveBypass(prevCheck => !prevCheck)}} />
          </div>
            <div className='flex flex-col'>
              <label className="label flex justify-around">
                <span className="label-text">Money Symbol</span>
              </label>
              <div className="btn-group flex justify-center">
                <div className="btn btn-primary m-1" onClick={() => setMoneySymbol('USD ')}>USD</div>
                <div className="btn btn-primary m-1" onClick={() => setMoneySymbol('$')}>$</div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <textarea className="textarea m-4" rows="5" cols="60" value={output} placeholder="" disabled></textarea>
            <button className={activeCopy ? 'btn btn-success' : 'btn btn-secondary'} onClick={() => {navigator.clipboard.writeText(output); setCopySuccessful('Copied!'); setActiveCopy(true)}}>{copySuccessful}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DateCellGen
