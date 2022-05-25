import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import 'antd/dist/antd.css';
import ClaimComponent from "./routes/claim/claim.component";
import Claims from "./routes/claims/claims.component";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='claims' element={<Claims />} />
        <Route path='claim' element={<ClaimComponent />} />
      </Route>
    </Routes>
  );
};

export default App;
