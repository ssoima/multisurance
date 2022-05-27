import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
const { Step } = Steps;

const ProcessTracking = ({claim}) => {

    return (
        <Steps current={1}>
            <Step title="Ankündigung" description={claim.title} icon={<UserOutlined/>}/>
            <Step title="Bestätigung" description={claim.lawyerName + " muss die Leistung bestätigen"} icon={<SolutionOutlined/>}/>
            <Step title="Zahlung" description="Ihre Leistung wird zurück bezahlt" icon={<SmileOutlined/>}/>
        </Steps>
    );
}
export default ProcessTracking;