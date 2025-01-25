
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import MyNav from './MyNav'
import MyFooter from './MyFooter'



function App() {
  return (
    <body className='App'>
      <headre>
        <MyNav/>
      </headre>
    <div className='App-content'>

    </div>
      <footer>
        <MyFooter/>
      </footer>
    </body>
      
  );
}

export default App;
