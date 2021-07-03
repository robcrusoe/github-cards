import Card from './../Card/Card';

const List = (props) => {
  return (
    <>
      {props.profiles.map(profile => <Card key={profile.name} {...profile} />)}
    </>
  );
};

export default List;