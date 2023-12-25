import '../../frontOffice/4-contact/contact.css';
import Lottie from 'lottie-react';
import contactAnimation from "../../../animation/contact.json";
import { postMessages } from "../../../api/MessagesApi";
import { fetchaccount } from '../../../api/UsersApi';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../../redux/UserSlice';

const Testing = () => {
    const advertRedux = useSelector(state => state.advertElement);
    // @ts-ignore
    const userRedux = useSelector(state => state.userElement);
    const dispatch = useDispatch();
    const getAuth = async () => {
        const data = await fetchaccount();
        dispatch(setUser(data));
    }
    useEffect(() => {
        getAuth();
    }, []);

    console.log('advert from testing :', advertRedux);
    console.log('User from testing :', userRedux);

    const [message, setMessage] = useState({});
    const [sender, setSender] = useState(userRedux.email);
    const [receiver, setReceiver] = useState('iheb.zargouni.pr@gmail.com');
    const [messageCore, setMessageCore] = useState('');
    const [messageDate, setMessageDate] = useState(new Date());

    const addMessage = async (e, message) => {
        e.preventDefault();
        console.log("sender :", sender);
        console.log("Receiver :", receiver);
        console.log("MessageCore :", messageCore);
        console.log("messageDate :", messageDate);
        // try {
        //     const data = await postMessages(message);
        // } catch (err) {
        //     console.log(err);
        // }
    }

    return (
        <section className="contact-us">
            <h1 className="title">
                <span className="icon-envelope"></span>
                Contact Seller
            </h1>
            <p className="sub-title">
                Contact Seller for more information or buying the item.
            </p>
            <div style={{ justifyContent: "space-between" }} className="flex">
                <form className="">
                    <div className="flex" style={{ marginTop: "24px" }}>
                        <label htmlFor="message">Your message:</label>
                        <textarea value={messageCore} onChange={(e) => setMessageCore(e.target.value)} name="" id="message" required></textarea>
                    </div>

                    <button className="submit"
                        onClick={(e) => addMessage(e, { sender, receiver, messageCore, messageDate })}>Submit</button>
                </form>
                <div className="animation">
                    <Lottie className="contact-animation"
                        loop={true}
                        style={{ height: 355 }}
                        animationData={contactAnimation}
                    />
                </div>
            </div>
        </section>
    );
};

export default Testing;
