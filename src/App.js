import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import AuthPage from './pages/AuthPage';

const App = () => {
  return (
    <Layout> 
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/profile'} element={<ProfilePage/>}/>
        <Route path={'/auth-form'} element={<AuthPage/>}/>
      </Routes>
    </Layout>
  );
};

export default App