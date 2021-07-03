import './Card.css';

const Card = (props) => {
  return (
    <div className='github-profile'>
      <img className='github-img' src={props.avatar_url} alt={props.name} />
      <div className='info'>
        <div className='name'>{props.name}</div>
        <div className='company'>{props.company}</div>
      </div>
    </div>
  );
};

export default Card;