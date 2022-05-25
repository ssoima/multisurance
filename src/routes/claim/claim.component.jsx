import ProcessTracking from "../../components/process-tracking/process-tracking";
import {Button, Input, Tabs} from "antd";

const { TabPane } = Tabs;

const ClaimComponent = () => {

    const onTabChange = (key) => {
        console.log(key);
    };

    return (
        <div>
            <h1> Behandlung beim Peter Reithmeier</h1>
            <ProcessTracking />
            <div>
                <h2>Sende deinem Arzt eine erneute Bestätigungsanfrage</h2>
                <Input placeholder="Praxis e-mail" />
                <Button type="primary" ghost>
                    Bestätigungsanfrage schicken
                </Button>
            </div>
            <Tabs defaultActiveKey="1" onChange={onTabChange}>
                <TabPane tab="Leistungsbeschreibung" key="leistungsbeschreibung">
                    Leistungsbeschreibung Tab here
                </TabPane>
                <TabPane tab="Rechnung" key="rechnung">
                    Rechnung Tab here
                </TabPane>
            </Tabs>
        </div>
    )
};

export default ClaimComponent;