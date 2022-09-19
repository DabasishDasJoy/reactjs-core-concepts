import './App.css';

// Another ways of styling by declaring an object and define styles in the object.
const styled ={
  color: 'white', 
  backgroundColor: 'gray',
  borderRadius: '10px', 
  border: '2px solid slateblue',
  margin: '10px'
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>JSX</h1>
//         <div className="container">
//           {/* //JSX example */}
//           {/* style element can be in three ways: */}
//           {/* Third ways of stying an element is in Custom CSS file as traditional styling */}

//           {/* 1: One of the ways: inline style {}->place holder {{}->object for style} */}
//           <p style= {{color:"blue"}}>Hello Dude! REACT how are you? </p>
//           <h3 style={styled}>I'm from react world</h3>
//         </div>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  const persons = ['Joy', 'shuvo', 'pritu', 'liton'];
  const friends= [
    {name:'dabasish', profession:'developer'},
    {name:'joy', profession:'student'},
    {name:'Abul', profession:'player'}
  ];

  return (
    <div className="App">
      {/* create a custom componet and add here  */}
      {/* create component similar in look different in data  */}
      {/* For making different in data we need to send attibute as props dynamically */}
      
      {/* HTML attribute → converted into object by react → send those attributes as properties of an object → props → receives that object  */}

      {/* /* Yet this is static..  */
      /* for creating dynamic components we can get help from javascript */
      /* for example we have an array of names above */}
      
      
      {/* used to write js expression */}
      {
        persons.map(person => <Person name={person}></Person>)
      }
      {/* <Person name='Dabasish Das Joy' profession="developer"></Person>
      <Person name='Liton' profession="Enginner"></Person>
      <Person name='Shuvo' profession="Bekar"></Person> */}
      
      {/* we can do this using array of objects also */}

      <h1>Friend</h1>
      {/* static creation */}
      {/* <Friend name='Stiksd' profession="developer"></Friend>
      <Friend name='Nishat' profession="To to"></Friend>
      <Friend name='Arnob' profession="Singer"></Friend> */}
      {/* dynamic creation  with array of objects*/}

      {
        friends.map(friend => <Friend name={friend.name} profession={friend.profession}></Friend>)
      }
    </div>
  );
}

// creating custom component->similar in look different in data 
// Start name with capital letter */
// Adjacent JSX elements must be wrapped in an enclosing tag. either<></> or a <div></div>
function Person(props) {
  console.log("🚀 ~ file: App.js ~ line 65 ~ Person ~ props", props)
  // return <h1>Dabasish Das Joy </h1>
  // <p>Profession: Student</p>

  // wrapping the code to use JSX
  return(
    <div style={styled}>
      <h1>{props.name}</h1>
      <p>Profession: {props.profession}</p>
    </div>
  );
}


function Friend(props){
  console.log("🚀 ~ file: App.js ~ line 79 ~ Friend ~ props", props)
  return(
    <div style={styled}>
      <h1>{props.name}</h1>
      <p>Proffesion: {props.profession}</p>
    </div>
  );
}



export default App;
