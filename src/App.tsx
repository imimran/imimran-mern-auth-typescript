import React from 'react';
// import './App.css';
import {BrowserRouter, Routes, Route,  } from "react-router-dom";
import { AuthenticationForm } from './components/AuthenticationForm';
import { AppShell,Center, Container, Space} from '@mantine/core';




function App() {
  return (
    <div >
      <Container>
     <AppShell >
     <Space  />
    < Center>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthenticationForm />}>
          {/* <Route index element={<Home />} /> */}

  

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
      </BrowserRouter>
      </Center>
      </AppShell>
      </Container>
    </div>
  );
}

export default App;
