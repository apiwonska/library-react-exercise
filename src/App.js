import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import HomePage from 'pages/HomePage';
import CreateBookPage from 'pages/CreateBookPage';
import UpdateBookPage from 'pages/UpdateBookPage';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/add-book" element={<CreateBookPage />} />
      <Route path="/update-book/:id" element={<UpdateBookPage />} />
    </Routes>
  </Layout>
);

export default App;
