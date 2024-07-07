import { TextField, Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState({
    name: '',
    age: 0,
    weight: 0,
    height: 0
  });

  const [bmi, setBmi] = useState(0);

  const handleChange = (event) => {
    const eName = event.target.name;
    const value = event.target.value;
    setUser(values => ({ ...values, [eName]: value }))
  }
  const bmiCalculator = () => {
    console.log(user.weight / (user.height ^ 2));
    setBmi(user.weight / ((user.height / 100) * (user.height / 100)));
  }
  return (
    <div className="App">
      <h1>BMI Calulator</h1>
      <form action={bmiCalculator} method="post">
        <div className='textInput'>
          <TextField value={user.name} onChange={(e) => handleChange(e)} name="name" label="name" variant="outlined" />
        </div>
        <div className='textInput' >
          <TextField value={user.age} onChange={(e) => handleChange(e)} name="age" label="age" type='number' variant="outlined" />
        </div>
        <div className='textInput' >
          <TextField value={user.weight} onChange={(e) => handleChange(e)} name="weight" label="weight" type='number' variant="outlined" />
        </div>
        <div className='textInput' >
          <TextField value={user.height} onChange={(e) => handleChange(e)} name="height" label="height" type='number' variant="outlined" />
        </div>
        <Button type="button" variant="outlined" onClick={bmiCalculator} >Submit</Button>
        <h3>{bmi !== 0 ? bmi : ''}</h3>
        <h3>{user.name}</h3>
        <h3>{user.age}</h3>
      </form>
    </div>
  );
}

export default App;
