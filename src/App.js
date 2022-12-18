import './App.css';
import {useForm} from 'react-hook-form';

function App() {
  const {register,  handleSubmit} = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit = {handleSubmit(onSubmit)}>
        <input ref = "register" type = "file"></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
