import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
const { Step } = Steps;

const ProcessTracking = ({claim}) => {
    return (
        <Steps current={claim ? (claim.confirmedByLawyer ? 2 : 1) : 0}>
            <Step title="Ankündigung" description={claim ? claim.title : ''} icon={<UserOutlined/>}/>
            <Step title="Bestätigung" description={(claim ? claim.lawyerName : '') + " muss die Leistung bestätigen"} icon={<SolutionOutlined/>}/>
            <Step title="Zahlung" description="Ihre Leistung wird zurück bezahlt" icon={<SmileOutlined/>}/>
        </Steps>
    );
}
export default ProcessTracking;