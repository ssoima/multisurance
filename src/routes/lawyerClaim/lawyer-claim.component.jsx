import {useContext} from "react";
import {ClaimsContext} from "../../contexts/claims.context";
import {useEffect, useState} from "react";
import {confirmClaimByLawyer} from "../../utils/firebase/firebase.utils";
import {useParams} from "react-router";
import {Button} from "antd";

const defaultClaim = {
    claim: '',
    setClaim: () => null
};

const LawyerClaim = () => {
    let { claimId } = useParams();
    const {claims} = useContext(ClaimsContext);
    const [claim, setClaim] = useState(defaultClaim);


    useEffect(() => {
        setClaim(claims ? claims.find((claim) => claim.id === claimId) : null)

    }, [claims]);

    const confirmClaim = async () => {
        await confirmClaimByLawyer(claim);
        setClaim({lawyerClaim: true, ...claim})
        console.log(claim)
    }

    return (
         <div>
          <h1> Please confirm this claim {claim ? claim.lawyerName : ''}</h1>
             <Button onClick={confirmClaim}>Confirm Claim</Button>
         </div>
     );
 }

 export default LawyerClaim