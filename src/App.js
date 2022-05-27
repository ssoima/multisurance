import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import 'antd/dist/antd.css';
import Claims from "./routes/claims/claims.component";
import Claim from "./routes/claim/claim.component";
import LawyerClaim from "./routes/lawyerClaim/lawyer-claim.component";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='claims' >
            <Route index element={<Claims />} />
            <Route path=":claimId" element={<Claim />} />
        </Route>
          <Route path='lawyerClaim'>
              <Route path=":claimId" element={<LawyerClaim />} />
          </Route>
      </Route>
    </Routes>
  );
};

export default App;
