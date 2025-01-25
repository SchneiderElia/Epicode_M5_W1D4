
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import MyNav from './MyNav'
import MyFooter from './MyFooter'
import Alert from './Alert'







function App() {
  return (
    <div className='App'>

      <MyNav />

      <div className='App-content'>
        <div className='container mt-5'>
          <Alert />
        </div>

      </div>
      <footer>
        <MyFooter />
      </footer>
    </div>

  );
}

export default App;
