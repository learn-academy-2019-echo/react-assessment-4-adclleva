// ASSESSMENT 4: REACT ASSESSMENT
// Coding practical questions

// NOTE: In this assessment you will NOT be running a react file structure

// 1. Write a React component that prints "I am a component!" Be sure to include all necessary imports, exports, etc.
console.log('1. ------------------------------------')

// two different ways of creating this component
// import React from 'react'

// function ComponentPresent () {
//   return(
//     <h1>"I am a component!"</h1>
//   );
// }

// class ComponentPresent extends React.Component {
//   render() {
//     return(
//     <React.Fragment>
//       <h1>I am a component!</h1>
//     </React.Fragment>
//     );
//   }
// }

// export default ComponentPresent

// 2. Refactor this vanilla javascript loop to a map function. The output should remain the same.
console.log('2. ------------------------------------')

var names = ["Ford Prefect", "Arthur Dent", "Trillian", "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

// for(let i=0; i<names.length; i++){
//   console.log(`${names[i]} is ${names[i].length} characters long.`)
// }

names.map((names) => {
  console.log(`${names} is ${names.length} characters long.`)
})

// 3. Destructure the following variables out of state.
console.log('3. ------------------------------------')

this.state = {
  name: "Dracula",
  home: "Transylvania",
  dislikes: ["mirrors", "garlic", "wooden stakes"]
}

const { name, home, dislikes } = this.state

console.log(name)
console.log(home)
console.log(dislikes)
// 4. Write a React method that would add one and update the state of the count each time the method is called.
console.log('4. ------------------------------------')

this.state = {
  count: 0
}

// I tested this method in an actual React file and it works
handleChange = () => {
  const { count } = this.state
  const new_count = count + 1

  this.setState({counter: new_count})
}

// 5. There are four mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

// -------------------- This is the buggy version --------------------
// import React, { Component } from 'react';

// class Recipes{
//   constructor(props){
//     super(props)
//     this.state = {
//       recipes:
//         {name: 'Meatballs'},
//         {name: 'Mac & Cheese'}
//     }
//   }

//   render() {
//     return(
//       let recipe = recipes.map(recipe => {
//         return(
//           <li key={recipe.name}>{recipe.name}</li>
//         )
//       })
//       <ul>
//         {recipe}
//       </ul>
//     )
//   }
// }
// export default Recipes

// -------------------- This is my first version --------------------
// tested through a react file and yarn

// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       recipes: ['Meatballs', 'Mac & Cheese']
//     }
//   }

//   render() {

//     const { recipes } = this.state
//     let recipe = recipes.map(recipe => {
//       return <li>{recipe}</li>
//      })
 
//     return(

//       <ul>
//         {recipe}
//       </ul>
//     )
//   }
// }
// export default App

// -------------------- This is my second version --------------------
// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       recipes: [
//         {name: 'Meatballs', id: 1},
//         {name: 'Mac & Cheese', id: 2}
//       ]
//     }
//   }

//   render() {
//     const { recipes, id } = this.state

//     let recipe = recipes.map(recipe => {
//       return(
//         <li key={recipe.id}>{recipe.name}</li> 
//       )
//     })


//     return(
//       <ul>
//         {recipe}
//       </ul>
//     )
//   }
// }
// export default App