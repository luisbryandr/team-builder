import React, { useState } from 'react';
import Form from './Components/Form';






function App() {

  const [team, setTeam] = useState([]);
  const [values, setValues] = useState({ name: '', email: '', role: '' })

  const onSubmit = () => {
    setTeam([values, ...team]);
    setValues({ name: '', email: '', role: '' })
  }
  const onChange = (name, value) => {
    setValues({...values, [name]:value})
  }
  return (
    <div className="App">
      <h1>Team Builder App</h1>
      <Form
        values={values}
        change={onChange}
        submit={onSubmit}
      />
      {team.map((member, index) => {
        return (
          <div key={index}>
          <h3>{member.name}</h3>
          <p>{member.email}</p>
         <h5>{member.role}</h5>
        </div>
        ) 
      })}
    </div>
  );
}

export default App;
