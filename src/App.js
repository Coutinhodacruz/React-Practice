// import logo from './logo.svg';
import './App.css';
import LoginClassComponent from './views/components/auth/login/LoginClassComponent.jsx';
import FormComponent from './views/components/auth/Form/FormComponent';
import Elite from "./views/components/class/Elite";
import Calculator from './views/components/calculator/Calculator';
import BubbleShot from './views/components/bubbleshot/BubbleShot';
import Form from './views/components/function/Form';
import TicTacToe from './views/components/auth/tictactoe/TicTacToe';
import LoginPage from "./views/components/myForm/LoginPage";



function App() {
  return (
    <div className="App">
      {/* <LoginClassComponent /> */}
      {/*<FormComponent />*/}
        {/* <Elite /> */}
        {/* <Calculator /> */}
        {/* <BubbleShot /> */}
        {/* <Form /> */}
        {/*<TicTacToe />*/}
        <LoginPage />

    </div>
  );
}

export default App;
