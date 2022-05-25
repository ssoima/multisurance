import {Button, Card, Form, Input, Modal} from "antd";
import {useState} from "react";
import './claims.styles.scss';
import ClaimCard from "../../components/claim-card/claim-card.component";
import './claims.styles';
import {ClaimCardContainer, ClaimsContainer} from "./claims.styles";
import {createClaimDocument} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    title: '',
    lawyerName: '',
    lawyerEmail: ''
}

const Claims = () => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { title, lawyerName, lawyerEmail } = formFields;
    const [form] = Form.useForm();

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = async () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        console.log(formFields)
        await createClaimDocument(title, lawyerName, lawyerEmail);
        setVisible(false);
        setConfirmLoading(false);
        resetFormFields();
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    return (
        <ClaimsContainer>
                <ClaimCard claim={
                    {title: "titlebla", date: "dsada", lawyerName:"LawyerName", lawyerEmail:"LawyerEmail"}
                } />
            <Button type="primary" onClick={showModal}>
                NEUE RECHTSANFRAGE MELDEN
            </Button>
            <Modal
                title="Title"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Form
                    layout="vertical"
                    form={form}
                    onValuesChange={handleChange}
                >
                    <Form.Item label="Title">
                        <Input type='text'
                               required
                               onChange={handleChange}
                               name='title'
                               value={title}/>
                    </Form.Item>
                    <Form.Item label="Lawyer Full Name">
                        <Input type='text'
                               required
                               onChange={handleChange}
                               name='lawyerName'
                               value={lawyerName}/>
                    </Form.Item>
                    <Form.Item label="Lawyer Email">
                        <Input type='text'
                               required
                               onChange={handleChange}
                               name='lawyerEmail'
                               value={lawyerEmail}/>
                    </Form.Item>
                </Form>
            </Modal>
        </ClaimsContainer>
    );
}

export default Claims;