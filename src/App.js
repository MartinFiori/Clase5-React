import './App.css';
import ItemCount from './Components/ItemCount/ItemCount.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'


function App() {
  return (
  <>
  <ItemListContainer stock={5}/>
  <ItemListContainer stock={2}/>
  <ItemListContainer stock={8}/>
  </>
  );
}

export default App;
