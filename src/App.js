import { Routes, Route } from 'react-router-dom';
import SignUp from './page/SignUp';
import SignIn from './page/SignIn';
import ToDo from './page/ToDo';

function App() {
  return (
    <Routes>
      <Route path='signup' element={<SignUp />} />
      <Route path='signin' element={<SignIn />} />
      <Route path='todo' element={<ToDo />} />
      <Route path='*' element={<SignIn />} />
    </Routes>
  );
}

export default App;
