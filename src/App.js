import'./App.css'
import {useState} from 'react'

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App ()
{ 
  const [ step, setstep ] = useState( 1 );
  const [ isOpen, setIsOpen ] = useState( true )
  



  function NextHandler ()
  {
   if(step<3) setstep(step+1)
  }
  function PreviousHandler ()
  {  if (step > 1) setstep(step - 1);
    
  }
  return (
    <>
      <button onClick={ () => setIsOpen( !isOpen ) } className='close'>&times;</button>
      

      {isOpen &&(
        <div className="container">
        <div className="number">
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>
        <p className="messages">
          step {step}:{messages[step - 1]}
        </p>
        <div className="btns">
          <button onClick={PreviousHandler}>previous</button>
          <button onClick={NextHandler}>next</button>
        </div>
        </div>
     ) }
    </>
  ); 
}