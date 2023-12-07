//----------------- Styling Zone --------------------//
import logoPr from '../../../css/images/logo.png';
//-----------------Libraries Zone -------------------//
import React, { useState } from 'react';
//----------------- Components Zone -----------------//


const Sidebar = () => {

    const [nav1, setNav1] = useState('active');
    const [nav2, setNav2] = useState('');
    const [nav3, setNav3] = useState('');
    const [nav4, setNav4] = useState('');
    const [nav5, setNav5] = useState('');
    const [nav6, setNav6] = useState('');
    const [nav7, setNav7] = useState('');
    const [nav8, setNav8] = useState('');
    const [nav9, setNav9] = useState('');


    const backToInactive = () => {
        setNav1('');
        setNav2('');
        setNav3('');
        setNav4('');
        setNav5('');
        setNav6('');
        setNav7('');
        setNav8('');
        setNav9('');
    }
    return (
        <aside className='dash_aside' id="aside">
            <div className="dash_toggle">
                <div className="dash_logo">
                    <img src={logoPr} />
                    <h2>Asmr<span className="danger">Prog</span></h2>
                </div>
                <div className="close" id="close-btn">
                    <span className="material-icons-sharp">
                        close
                    </span>
                </div>
            </div>
            <div className="dash_sidebar">
                <a className={nav1} onClick={() => { backToInactive(); setNav1("active") }}>
                    <span className="material-icons-sharp">
                        dashboard
                    </span>
                    <h3>Dashboard</h3>
                </a>
                <a className={nav2} onClick={() => { backToInactive(); setNav2("active") }}>
                    <span className="material-icons-sharp">
                        person_outline
                    </span>
                    <h3>Users</h3>
                </a>
                <a className={nav3} onClick={() => { backToInactive(); setNav3("active") }}>
                    <span className="material-icons-sharp">
                        receipt_long
                    </span>
                    <h3>History</h3>
                </a>
                <a className={nav4} onClick={() => { backToInactive(); setNav4("active") }}>
                    <span className="material-icons-sharp">
                        insights
                    </span>
                    <h3>Analytics</h3>
                </a>
                <a className={nav5} onClick={() => { backToInactive(); setNav5("active") }}>
                    <span className="material-icons-sharp">
                        mail_outline
                    </span>
                    <h3>Tickets</h3>
                    <span className="message-count">27</span>
                </a>
                <a className={nav6} onClick={() => { backToInactive(); setNav6("active") }}>
                    <span className="material-icons-sharp">
                        inventory
                    </span>
                    <h3>Sale List</h3>
                </a>
                <a className={nav7} onClick={() => { backToInactive(); setNav7("active") }}>
                    <span className="material-icons-sharp">
                        report_gmailerrorred
                    </span>
                    <h3>Reports</h3>
                </a>
                <a className={nav8} onClick={() => { backToInactive(); setNav8("active") }}>
                    <span className="material-icons-sharp">
                        settings
                    </span>
                    <h3>Settings</h3>
                </a>
                <a className={nav9} onClick={() => { backToInactive(); setNav9("active") }}>
                    <span className="material-icons-sharp">
                        add
                    </span>
                    <h3>New Login</h3>
                </a>
                <a href="#" className="">
                    <span className="material-icons-sharp">
                        logout
                    </span>
                    <h3>Logout</h3>
                </a>
            </div>
        </aside >
    );
}
export default Sidebar;