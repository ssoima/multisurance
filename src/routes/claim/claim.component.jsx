import ProcessTracking from "../../components/process-tracking/process-tracking";
import {Button, Input, Tabs} from "antd";
import {useParams} from "react-router";
import {ClaimsContext} from "../../contexts/claims.context";
import {useContext} from "react";

const { TabPane } = Tabs;

const Claim = () => {
    let { claimId } = useParams();
    const claims = useContext(ClaimsContext);

    //{ id, ownerId, title, lawyerName, lawyerEmail, creationDate }

    const onTabChange = (key) => {
        console.log(key);
    };

    return (
        <div>
            <h1> Rechtsanfrage an {claims[claimId] ? claims[claimId].lawyerName : ''}</h1>
            <ProcessTracking />
            <div className="query-form">
                <h2>Sende deinem Rechtsanwalt eine erneute Bestätigungsanfrage</h2>
                <Input placeholder="E-mail" />
                <Button type="primary" ghost>
                    Bestätigungsanfrage schicken
                </Button>
            </div>
            <Tabs defaultActiveKey="1" onChange={onTabChange}>
                <TabPane tab="Leistungsbeschreibung" key="leistungsbeschreibung">
                    <div className="tab-content">
                        <img src="https://irights.info/wp-content/uploads/2016/05/bean-belegfunktion.png"/>
                    </div>
                </TabPane>
                <TabPane tab="Rechnung" key="rechnung">
                    <img src="https://memegenerator.net/img/instances/65998081.jpg"/>
                </TabPane>
            </Tabs>
        </div>
    )
};

export default Claim;