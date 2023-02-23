import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <NavBar title="TextWrite" about="About US" />
      <div className="container">
      <TextForm />
      </div>
    </>
  );
}

export default App;
