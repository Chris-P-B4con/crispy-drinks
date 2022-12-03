import { useState } from 'react';
import Login from './components/login/login';

function App() {
  const [loginModal, setLoginModal] = useState(true);
  const handleCloseModal = () => setLoginModal(false);
  return (
    <div className="App" id='App'>
      <Login />
    </div>
  );
}

export default App;
