 import React,{useState} from 'react'

export const FormText = (props) => {
const[text,setText]=useState("");

const tt=(e)=>{
setText(e.target.value);
}

// const addItem=(text)=>{
//    return {mtext:text ,state:false}
// }
const handleSub=(e)=>{
e.preventDefault();
props.addText(text);

}

  return (

   <form  onSubmit={handleSub}>
   <input type="text" onChange={tt}/>
   <input type="submit" value="ADD"/>
     </form>

  );
}

export default FormText;

