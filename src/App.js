
import { useState } from 'react';
import './App.css';
import List from './components/List/List';
import Form from './components/Form/Form';

const DUMMY_PROFILES = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

const App = (props) => {
  const [profiles, setProfiles] = useState(DUMMY_PROFILES);

  const addNewProfile = (profile) => {
    setProfiles((prevState) => {
      return [...profiles, profile];
    });
  };

  return (
    <div className="App">
      <h1>{props.title}</h1>
      <Form addProfile={addNewProfile} />
      <List profiles={profiles} />
    </div>
  );
}

export default App;
