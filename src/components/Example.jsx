// import React ,{useState, useEffect}   from 'react';
// // import {useState}  from React;

// const Example = (props) => {
//     const [people, setPeople] = useState([]);
 
//     useEffect(() => {
//         fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//             .then(response => response.json())
//             .then(response => setPeople(response.results))
//     }, []);
 
//     return (
//         <div>
//             {people.length > 0 && people.map((pokemonm, index)=>{
//                 <ul>
//                     {<li key={index}>{pokemonm.name}</li>}
//                 </ul>
//                 // return (<div key={index}>{pokemonm.name}</div>)
//             })
//             }
//         </div>
//     );
// }
// export default Example;

