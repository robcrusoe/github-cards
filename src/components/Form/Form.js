import { useState } from 'react';
import './Form.css';

import axios from 'axios';

const Form = (props) => {
  const [profileName, setProfileName] = useState('');

  const inputChangeHandler = (event) => {
    setProfileName((prevState) => {
      return event.target.value;
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    console.log('Profile to be added:', profileName);

    const response = await axios.get(`https://api.github.com/users/${profileName}`);
    const { avatar_url, name, company } = response.data;

    props.addProfile({ avatar_url, name, company });
    setProfileName('');
  };

  return (
    <form className='form' onSubmit={submitHandler}>
      {/* working with controlled components ... */}
      <input type='text' placeholder='Github Username' value={profileName} onChange={inputChangeHandler} />
      <button type='submit'>Add Profile</button>
    </form>
  );
};

export default Form;