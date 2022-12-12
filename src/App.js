import { useState } from 'react';
import './App.css';
// import Example from './components/Example';
import { FormText } from './components/FormText';
// import FruitForm from './components/FruitForm';
import { ShowList } from './components/ShowList';

function App() {
const [mlist,setMlist]=useState([{text:'defalt Text',status:false}]);
// const [dindex,setDindex]=useState(0);
// const inetstate =false;

const addTextToList =(newtxt)=>{
setMlist([...mlist ,{text:newtxt,status:false}]);
}

// const addTextToList =(newtxt)=>{
//   setMlist([...mlist ,{text:newtxt,state:inetstate}]);
//   }

const delelel=(dindex)=>{
setMlist([...mlist.slice(0,dindex),...mlist.slice(dindex+1)]);
// setMlist(tasks.filter(( index) => index !== delIdx));

}


  return (
    <div className="App">

     <FormText addText={addTextToList}></FormText>
     <ShowList todelete={delelel} showlistm={mlist}></ShowList> 
      {/* <FruitForm></FruitForm>
     <Example></Example> */}
    </div>
  );

}
export default App;
