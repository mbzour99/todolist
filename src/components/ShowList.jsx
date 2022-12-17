import React,{useState} from 'react'

export const ShowList = (props) => {
const [isTasty, setIsTasty] = useState(false);
// const[state,setState]=useState(false);

const cl=(e)=>{
    // setIsTasty(e.target.checked)
    // setIsTasty(! isTasty)
    setIsTasty(! isTasty);
    // if(isTasty === false){
    // setState('line-through');
    // }else{
    // setState('none')
    // }

}

const deletlist=(e)=>{
   props.todelete(e.target.value); 
}

// const textstyle={
//     textDecorationLine: state
// }
  return (
    <div>
        {/* <h1>lijflhikfuh</h1> */}
<ul>
{
    props.showlistm.map((item,index)=>
        // <div>
        // <span key={index} style={textstyle} >{item.text}</span>
        // <input value={index}  name={index} type="checkbox" checked={isTasty} onChange={cl}/>
        // <button value={index} onClick={deletlist}>Delete</button>
        // </div>
        <div>
        <span key={index} className={isTasty?'my-task':''} >{item.text}</span>
        <input value={index}  name={index} type="checkbox"  onClick={cl}/>
        <button value={index} onClick={deletlist}>Delete</button>
        </div>
    )
}

</ul>

    </div>
  )
}
export default ShowList;