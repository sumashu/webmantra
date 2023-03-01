
import './App.css';
// import { Student } from './component/Student';
import Header from './component/Header';
import Counter from './component/Counter';
// import Movies from './component/Movies';
// import Profile from './component/data/profile.json'

function App() {
  
  return (
    <div className="App">
       <Header></Header>
       <div className="Main">
          <Counter></Counter>
         
       </div>
  
    </div>
  );
}

export default App;
