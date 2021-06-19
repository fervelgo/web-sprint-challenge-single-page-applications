import React from "react";
import Form from "./Form"
import { Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'


const initialFormValues = {
  username: '',
  size: '',
  specialText: '',
  bacon: false,
  artichoke: false,
  pepperoni: false,
  mushrooms: false,
}

const initialFormErrors = {
  username: '',
  email: '',
  role: '',
}

const initialPizza = []
const initialDisabled = true


export default function App() {

  const [pizza, setPizza] = useState(initialPizza)          
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean


  

  const postNewPizza = newPizza => {

    axios.post(`http:pizza.com`, newPizza)
    .then(res =>{
      setPizza([res.data, ...pizza])
    })
    .catch(err => {
      console.log(err)
    })
    .finally(()=> {
      setFormValues(initialFormValues)})
  }


  
  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const formSubmit = () => {
    const newPizza = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      size: formValues.size.trim(),
      specialText: formValues.specialText.trim(),
      toppings: ['bacon','pepperoni','mushrooms','artichoke'].filter(toppings => formValues[toppings])
    }
    postNewPizza(newPizza)
  }


return(
    <div>
    <div>
      <h1>Lambda Eats</h1>
      <p>Get your favorite food from Lambda Eats!</p>
        <Link to='/form'>
        <button>Gimme some pizza please</button>
        </Link>

        <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

    </div>

    <Switch>
      <Route  exact path= '/form' component={Form}/>
      {/* // <Route  exact path= '/home' component={Home}/> */}
            

    </Switch>
    
    </div>

  );
  }
