import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn/Index';
// import SignUp from './pages/SignUp/Index';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
