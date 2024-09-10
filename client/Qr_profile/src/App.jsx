import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import DataFetchingPage from './components/DataFetchingPage';
import NothingToFind from './components/NothingToFInd';

function App() {
    return (
      <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profiles/:profileId" element={<DataFetchingPage />} />
        <Route path="/profiles" element={<NothingToFind />} />
      </Routes>
    </Router>
    );
}

export default App;
