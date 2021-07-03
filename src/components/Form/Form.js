import './Form.css';

const Form = (props) => {
  return (
    <>
      <form className='form'>
        <input type='text' placeholder='Github Username' />
        <button type='submit'>Add Profile</button>
      </form>
    </>
  );
};

export default Form;