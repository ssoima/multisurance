import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
const { Step } = Steps;

const ProcessTracking = () => (
    <Steps current={0}>
        <Step title="Ankündigung" description="Zahnersatz Krone" icon={<UserOutlined />} />
        <Step title="Bestätigung" description="Der Arzt muss die Leistung bestätigen" icon={<SolutionOutlined />} />
        <Step title="Zahlung" description="Ihre Leistung wird zurück bezahlt" icon={<SmileOutlined />} />
    </Steps>
);

export default ProcessTracking;