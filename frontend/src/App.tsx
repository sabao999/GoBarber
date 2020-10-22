import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn/Index';
// import SignUp from './pages/SignUp/Index';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;
