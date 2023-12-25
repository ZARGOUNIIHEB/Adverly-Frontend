import axios from 'axios';

export const fetchAllMessages = async () => {
    const { data } = await axios.get('http://localhost:5004/message/allMessages');
    return data;
}

export const postMessages = async (values) => {
    const addMessage = await axios.post('http://localhost:5004/message/addMessage', { ...values });
}

export const getMessagesBySender = async (sender) => {
    const { data } = await axios.get(`http://localhost:5004/message/getMessageBySender/${sender}`);
    return data;
}
export const getMessagesByReceiver = async (receiver) => {
    const { data } = await axios.get(`http://localhost:5004/message/getMessageByReceiver/${receiver}`);
    return data;
}
export const getMessagesByAdvertId = async (advertId) => {
    const { data } = await axios.get(`http://localhost:5004/message/getMessageByAdvertId/${advertId}`);
    return data;
}