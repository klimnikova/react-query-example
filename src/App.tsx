import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import User from './components/User/User';

import './App.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <User />
    </QueryClientProvider>
  );
};

export default App;
