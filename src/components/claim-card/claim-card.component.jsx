import './claim-card.styles.scss';
import {Card} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const ClaimCard = ({claim}) => {
    const { id, ownerId, title, lawyerName, lawyerEmail, creationDate } = claim;
    let navigate = useNavigate();

    const navigateToClaim = () => {
        navigate(`./${claim.id}`, { replace: true })
    }

    return(
    <Card
        title={title}
        bordered={false}
        style={{
        }}
        extra={creationDate %60}
        actions={[
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
        ]}
        onClick={navigateToClaim}
    >
        <p>Diese Rechtsanfrage wird von {lawyerName} bearbeitet.</p>
    </Card>
    )

};

export default ClaimCard;