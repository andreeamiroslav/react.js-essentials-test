/* eslint-disable no-template-curly-in-string */
import './App.css';
import React, { useState, useEffect, useReducer} from "react"
import { Routes, Route } from "react-router-dom"
import {Home, About, Events, Contact, Whoops404, Services, CompanyHistory, Location} from './pages'
// import Cattura from './Cattura.PNG'

// const dishes = [
//   "roba",
//   "altra roba",
//   "ulteriore roba"
// ]

// const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}))

// function Header(props){ //This is a component
//   return (
//     <header>
//       <h1>{props.name}</h1>
//     </header>
//   )
// }

// function Main(props){
//   return (
//     <section>
//       <p>{props.adjective}</p>
//       {/* //src can even be an url */}
//       <img src={Cattura} alt='cattura telegram'/>  {/*alt is mandatory for accessibility*/}
//       <ul style={{textAlign: 'left'}}>
//         { props.dishes.map((dish) => (
//           <li key={dish.id}>
//             {dish.title}
//           </li>
//         ))}
//       </ul>
//     </section>
//   )
// }

// function Footer(props){
//   return (
//     <footer>
//       <p>aoo {props.year}</p>
//     </footer>
//   )
// }

// function SecretComponent(){
//   return <h1>Authorized users only</h1>
// }

// function RegularComponent(){
//   return <h1>Any user</h1>
// }

function App({login}) {
  // -------------------- Basic rendering---------------------
  // return (
  //   <div className="App"> {/*className NOT class*/}
  //     <Header name="AOO"/>
  //     <Main adjective="aooooo" dishes={dishObjects}/>
  //     <Footer year={new Date().getFullYear()}/>
  //   </div>
  // );

  // -------------------- Conditional rendering---------------------
  // return (
  //   <>
  //   {/* {props.authorized ?  <SecretComponent/> : <RegularComponent />} /// if else (ternary operator) */}
  //   </>
  // )
  
  // -------------------- useState and useEffect hooks (state management) ---------------------
  // const [emotion, setEmotion] = useState("happy") 
  // //parameter of useState => initial state
  // //the function returns an array of 2 objects:
  // // - current state
  // // - function for setting the state (takes new state as argument)

  // useEffect(() => {
  //   console.log( ` It's ${emotion} here `, [emotion] )
  // })

  // //first argument function, second argument dependency array
  // //if the dep array is empty the effect is not gonna be called again after the first render
  // //the values in the dep array are tracked, if any changes happen the effect is called 

  // return (
  //   <>
  //   <h1>Current emotion is {emotion}</h1>
  //   <button onClick={() => setEmotion("frustrated")}> Frustrate </button>
  //   </>
  // )

  // -------------------- useReducer (state management) ---------------------
  //reducer: function that takes a state and returns a new state

  // const [checked, setChecked] = useState(false)
  // function toggle(){  //this is a reducer!!
  //   setChecked(checked => !checked)
  // }

  // const [checked, toggle] = useReducer(
  //   (checked => !checked),
  //   false)
  // // first argument: reducer function
  // // second argument: initial state

 

  // return(
  //   <>
  //     <input type="checkbox" value={checked} onChange={toggle} />

  //     <p>{checked ? "checked" : "not checked"}</p>
  //   </>
  // )

  // -------------------- async fetching data ---------------------

  // const [data, setData] = useState(null)
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   if(!login) return;
  //   setLoading(true)
  //   fetch(`https://api.github.com/users/${login}`)
  //   .then(response => response.json())
  //   .then(setData)
  //   .then(() => setLoading(false))
  //   .catch(setError)
  // }, [login])

  // if(loading) return <h1>Loading...</h1>

  // if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  // if(!data) return null

  // return (
  //   <div>
  //     <h1>nickname: {data.login}</h1>
  //     <h1>{data.name}</h1>
  //     <p>{data.location}</p>
  //     <img src={data.avatar_url} alt={data.login} />
  //   </div>
  // )

  // -------------------- testing ---------------------

  // return(
  //   <div>
  //     <h1>Ao</h1>
  //   </div>
  // )

  // -------------------- router ---------------------

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} >
          <Route path="services" element={<Services/>} />
          <Route path="history" element={<CompanyHistory/>} />
          <Route path="location" element={<Location/>} />
        </Route>
        <Route path="/events" element={<Events/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Whoops404/>} />
      </Routes>
    </div>
  )
  

}

export default App;
