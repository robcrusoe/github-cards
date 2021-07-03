import Card from './../Card/Card';
import { useState } from 'react';

const DUMMY_PROFILES = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

const List = () => {
  const [profiles, setProfiles] = useState(DUMMY_PROFILES);

  return (
    <>
      {profiles.map(profile => <Card key={profile.name} {...profile} />)}
    </>
  );
};

export default List;