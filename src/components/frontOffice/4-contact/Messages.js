import { getMessagesByAdvertId } from '../../../api/MessagesApi';
import { useEffect } from 'react';

const Messages = ({ advertId }) => {
    console.log("advertId", advertId);
    const getMessages = async () => {
        try {
            const data = await getMessagesByAdvertId(advertId);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getMessages();
    }, [advertId]);

    return (
        <div>
            <h1>{`This is the message id : ${advertId}`}</h1>
        </div>
    );
}
export default Messages;