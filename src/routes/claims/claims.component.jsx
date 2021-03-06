import {Button, Card, Form, Input, Modal} from "antd";
import {useState, useEffect, useContext} from "react";
import './claims.styles.scss';
import ClaimCard from "../../components/claim-card/claim-card.component";
import './claims.styles';
import {ClaimsContainer, ClaimsFlex} from "./claims.styles";
import {createClaimDocument, getClaimDocuments} from "../../utils/firebase/firebase.utils";
import {ClaimsContext} from '../../contexts/claims.context'
import {UserContext} from "../../contexts/user.context";

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
    const {claims, setClaims} = useContext(ClaimsContext);
    const {currentUser, setCurrentUser} = useContext(UserContext);
    let loading=true;

    const showModal = () => {
        setVisible(true);
    };
/*
    useEffect(() => {
        if (claims!== {})
        loading=false;

    }, [])*/
   /* useEffect(() => {
        async function fetchData() {
            console.log(await getClaimDocuments());
        }
        fetchData();
    },[])*/

    const handleOk = async () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        const newClaim = await createClaimDocument(currentUser.uid ,title, lawyerName, lawyerEmail);
        setClaims([newClaim, ...claims]);
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
    console.log(claims);
/*

* */
    return (
        <ClaimsContainer>
            <div className="headline">
                <h2>Claims</h2>

                <Button type="primary" onClick={showModal}>
                    NEUE RECHTSANFRAGE MELDEN
                </Button>
            </div>
                <ClaimsFlex>
                    {claims ? claims.map( (claim) => (
                        <ClaimCard claim={claim} key={claim.id} />
                    )) : ''}
                </ClaimsFlex>
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