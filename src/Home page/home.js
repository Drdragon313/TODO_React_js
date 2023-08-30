import './style.scss';
import Button from "../components/Button/button";
import Heading from "../components/Heading/heading";
import Textbox from "../components/TextBox/textbox";
import Label from "../components/Labels/label";

function Home() {
  return (
    <div className="App">
      <div className='signin_container'>
        <Heading text="Home Page"></Heading>
        <div className='flex-container'>
        <Textbox placeholder="Enter New Task"></Textbox>
        <Button text="ADD"></Button>
        </div>
      </div>
      </div>
  );
}

export default Home;