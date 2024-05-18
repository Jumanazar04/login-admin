import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { Suspense } from 'react';
const Login = React.lazy(() => import('./pages/Login'))

function App() {
  return (
    <BrowserRouter >
      <Suspense>
        <Routes>
          <Route path='/login' element={Login}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
