import React,{useState} from 'react'

export const ShowList = (props) => {
const [isTasty, setIsTasty] = useState(false);
const[state,setState]=useState('');

const cl=(e)=>{
    setIsTasty(e.target.checked)
    // setIsTasty(! isTasty)
    if(isTasty === false){
    setState('line-through');
    }else{
    setState('none')
    }

}

const deletlist=(e)=>{
   props.todelete(e.target.value); 
}

const textstyle={
    textDecorationLine: state
}
  return (
    <div>
        {/* <h1>lijflhikfuh</h1> */}
<ul>
{
    props.showlistm.map((item,index)=>
        <li key={index} style={textstyle} >{item.text} <input value={index}  name={index} type="checkbox" checked={isTasty} onChange={cl}/> <button value={index} onClick={deletlist}>Delete</button></li>
    )
}

</ul>

    </div>
  )
}
export default ShowList;