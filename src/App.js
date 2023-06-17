import { useState, useEffect } from 'react';
import classes from './App.module.css'
import FormInput from './Components/FormInput';
import Home from './Components/Home';
function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthdate: ""
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage: "Username should be 3-20 characters and can contain alpha-numeric characters and underscore !",
      required: true,
      pattern: "^[A-Za-z][A-Za-z0-9_]{3,20}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "Enter a valid email address !",
      required: true
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage: "Password should be 8-20 characters and include atleast 1 letter,1 number and 1 special character",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Passwords do not match",
      required: true,
      pattern: values.password,
    },
    {
      id: 5,
      name: "birthdate",
      type: "date",
      placeholder: "Birthdate",
      label: "Birthdate",
      errorMessage: "",
      required: true
    },
  ]


  const formSubmitHandler = (event) => {
    event.preventDefault();
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
    // const data = new FormData(event.target);
    // console.log(Object.fromEntries(data.entries()));
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setValues({
      ...values,
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthdate: ""
    })
  };

  const onChangeHandler = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  return (
    <div className={classes.app}>
      {!isLoggedIn && <form onSubmit={formSubmitHandler}>
        <h1>Register Here</h1>
        {inputs.map(input => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChangeHandler} />
        ))}
        <button>Submit</button>
      </form>}
      {isLoggedIn && <Home onLogout={logoutHandler} userInfo={values} />}
    </div>
  );
}

export default App;
