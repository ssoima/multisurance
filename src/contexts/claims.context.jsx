import { createContext, useState, useEffect } from 'react';

import { getClaimDocuments } from '../utils/firebase/firebase.utils';

export const ClaimsContext = createContext({
  claimsMap: null,
});

export const ClaimsProvider = ({ children }) => {
  const [claims, setClaims] = useState(null);

  useEffect(() => {
    const getClaimsMap = async () => {
      const claimMap = await getClaimDocuments();
      setClaims(claimMap);
    };

    getClaimsMap();
  }, []);

  const value = { claims, setClaims };
  return (
    <ClaimsContext.Provider value={value}>
      {children}
    </ClaimsContext.Provider>
  );
};
