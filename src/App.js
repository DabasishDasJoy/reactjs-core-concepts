import './App.css';

// Another ways of styling by declaring an object and define styles in the object.
const styled ={
  color: 'red', 
  backgroundColor: 'gray',
  borderRadius: '10px'
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
  return (
    <div className="App">
      {/* create a custom componet and add here  */}
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

// creating custom component->similar in look different in data 
// Start name with capital letter */
// Adjacent JSX elements must be wrapped in an enclosing tag. either<></> or a <div></div>
function Person() {
  // return <h1>Dabasish Das Joy </h1>
  // <p>Profession: Student</p>

  // wrapping the code to use JSX
  return(
    <div style={styled}>
      <h1>Dabasish Das Joy</h1>
      <p>Profession: Web Developer</p>
    </div>
  );
}


function Friend(){
  return(
    <div style={styled}>
      <h1>Sakib Al Hassan</h1>
      <p>Proffesion: Cricketer</p>
    </div>
  );
}



export default App;
