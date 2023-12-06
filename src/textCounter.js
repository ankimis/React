import React, { useState ,useRef} from 'react';


export default function AextCounter(props) {
    const textAreaRef = useRef(null);
    const ConverUpper= ()=>{
        // console.log('Uppr',setvaletname);
        let uppertext= setvaletname.toUpperCase();
        setName(uppertext);
        props.showAlert("Converted In uppercase",'success')
    }
    const ConverLower= ()=>{
        let lowertext= setvaletname.toLowerCase();
        setName(lowertext);
        props.showAlert("Converted   In lowercase",'success')

    }
    const Reset= ()=>{
        setName('');
    }
    const copy=()=>{
        textAreaRef.current.select();
        document.execCommand('copy');
    }
   const [setvaletname, setName] = useState('');
   const textval =(event)=>{
        setName(event.target.value);
    }
    return(
        <div className="container">
            <div className="mb-3">
                    <h2 className={`text-${props.mode === 'light' ? 'black':'light'}` }>{props.title}</h2>
                    <textarea className="form-control" value={setvaletname} id="exampleFormControlTextarea1" ref={textAreaRef}  onChange={textval} rows="10"></textarea>
            </div>
           <button type="button" className="btn btn-primary me-3 " onClick={ConverUpper}>Conver To Upper</button>
           <button type="button" className="btn btn-primary me-3" onClick={ConverLower}>Conver To Lower</button>
           <button type="button" className="btn btn-primary me-3" onClick={copy}>Copy</button>
           <button type="button" className="btn btn-primary me-3" onClick={Reset}>Reset</button>

            <h5 className='mt-3 text-primary'>Prview:<br/> <span className='text-success me-2'>{setvaletname}</span></h5>
            <h6 className={`text-${props.mode === 'light' ? 'dark':'light'}` }>{setvaletname.split("").length} Total Word and Test Length {setvaletname.length}</h6>

        </div>
    )

}