import './contact.css';
import Messages from './Messages';
import Lottie from 'lottie-react';
import contactAnimation from "../../../animation/contact.json";
import { useEffect, useState } from 'react';
import { fetchaccount } from "../../../api/UsersApi";
import { postMessages } from "../../../api/MessagesApi";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from "../../../redux/UserSlice";

const Contact = ({ advert }) => {
    console.log("advert :", advert.userAdvert);
    const [sender, setSender] = useState('');
    const [receiver, setReceiver] = useState(advert.userAdvert);
    const [messageCore, setMessageCore] = useState('');
    const [messageDate, setMessageDate] = useState(new Date());
    const [advertId, setAdvertId] = useState(advert._id);

    const user = useSelector(state => state.userElement);
    const dispatch = useDispatch();
    const getAuth = async () => {
        const data = await fetchaccount();
        setSender(data.email);
        dispatch(setUser(data));
    }
    useEffect(() => {
        getAuth();
    }, []);
    useEffect(() => {
        setReceiver(advert.userAdvert);
        setAdvertId(advert._id);
    }, [advert]);

    const sendMessage = async (e) => {
        e.preventDefault();
        const newMessage = { sender, receiver, messageCore, messageDate, advertId };
        console.log("NewMessage :", newMessage);
        try {
            const data = await postMessages(newMessage);
        } catch (err) {
            console.log(err);
        }
        setMessageCore('');
    }

    return (
        <section className="contact-us">
            <Messages advertId={advert._id} />
            <h1 className="title">
                <span className="icon-envelope"></span>
                Contact the Advertiser
            </h1>
            <p className="sub-title">
                Contact the Advertiser for more information.
            </p>
            <div style={{ justifyContent: "space-between" }} className="flex">
                <form className="">
                    {/* <div className="flex">
                        <label htmlFor="email">Email Address:</label>
                        <input required type="email" name="" id="email" />
                    </div> */}

                    <div className="flex" style={{ marginTop: "24px" }}>
                        <label htmlFor="message">Your message:</label>
                        <textarea value={messageCore}
                            onChange={(e) => setMessageCore(e.target.value)} required name="" id="message"></textarea>
                    </div>

                    <button className="submit" onClick={(e) => sendMessage(e)}>Submit</button>
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
}
export default Contact;