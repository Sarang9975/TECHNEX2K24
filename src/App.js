import React, { useEffect } from 'react';
import AOS from 'aos';
import { Route, Routes } from 'react-router-dom';

import routes from './pages';
import Page404 from './pages/404';
import Header from './components/header/Header';
import EventPage from './pages/EventPage';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        {routes.map((data, idx) => (
          <Route key={idx} path={data.path} element={data.component} exact />
        ))}
        {/* Add a new route for the events page */}
        <Route path="/events" element={<EventPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
