import "./underConstruction.css";
import { useState } from 'react';
const UnderConstruaction = () => {
    const [closeSign, setCloseSign] = useState('underConstruction');
    const [close, setClose] = useState('icon-close');
    return (
        <div className={closeSign}>
            <div className="under_image">
            </div>
            <button className={close} onClick={() => { setCloseSign(''); setClose(''); }}></button>
        </div >
    );
}
export default UnderConstruaction;