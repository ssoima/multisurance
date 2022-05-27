import {useContext} from "react";
import {ClaimsContext} from "../../contexts/claims.context";
import {useEffect, useState} from "react";
import {updateClaimDocument} from "../../utils/firebase/firebase.utils";
import {useParams} from "react-router";
import {Button} from "antd";

const defaultClaim = {
    claim: '',
    setClaim: () => null
};

const LawyerClaim = () => {
    let { claimId } = useParams();
    const {claims, setClaims} = useContext(ClaimsContext);
    const [claim, setClaim] = useState(defaultClaim);


    useEffect(() => {
        setClaim(claims ? claims.find((claim) => claim.id === claimId) : null)
        console.log(claim)
    }, [claims]);

    const confirmClaim = async () => {
        await updateClaimDocument(claim);
    }

    return (
         <div>
          <h1> Please confirm this claim</h1>
             <Button onClick={confirmClaim}>Confirm Claim</Button>
         </div>
     );
 }

 export default LawyerClaim