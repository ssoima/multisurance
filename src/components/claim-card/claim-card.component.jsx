import './claim-card.styles.scss';
import {Card} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";

const ClaimCard = ({claim}) => {
    const { title, date, lawyerName } = claim;
    return(
    <Card
        title={title}
        bordered={false}
        style={{
            width: 300,
        }}
        extra={date}
        actions={[
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
        ]}
    >
        <p>Diese Rechtsanfrage wird von {lawyerName} bearbeitet.</p>
    </Card>
    )

};

export default ClaimCard;