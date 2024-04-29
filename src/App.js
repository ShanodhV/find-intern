import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import themeStyle from './infrastructure';


function App() {
  return (
    <ThemeProvider theme={themeStyle}>
      <Router>
        
          <Routes>
            {/* <Route exact path="/" element={} />
            <Route exact path="/pages/account" element={<AccountSelectionPage />} />
            <Route path="/asd/a" element={<LoadComponent/>} />
            <Route path="/pages/class/:accountId" element={<ClassPage />} /> 
            <Route path="*" element={<div>Page not found</div>} /> */}
          </Routes>
        
      </Router>
    </ThemeProvider>
  );
}

export default App;
