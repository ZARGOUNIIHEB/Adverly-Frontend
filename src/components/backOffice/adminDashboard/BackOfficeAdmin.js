import logoPr from '../../../css/images/logo.png';

import Sidebar from './Sidebar';
import Main from './Main';
import Rightbar from './Rightbar';

import './BackOfficeAdmin.css';

const BackOfficeAdmin = () => {
    const orders = [
        {
            id: 1,
            productName: 'JavaScript Tutorial',
            productNumber: '85743',
            paymentStatus: 'Due',
            status: 'Pending'
        },
        {
            id: 2,
            productName: 'CSS Full Course',
            productNumber: '97245',
            paymentStatus: 'Refunded',
            status: 'Declined'
        },
        {
            id: 3,
            productName: 'Flex-Box Tutorial',
            productNumber: '36452',
            paymentStatus: 'Paid',
            status: 'Active'
        }
    ]

    const sideMenu = document.getElementById('aside');
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');

    const menuBtnDisplay = () => {
        sideMenu.style.display = 'block';
    };

    const closeBtnDisplay = () => {
        sideMenu.style.display = 'none';
    };

    const darkModeDisplay = () => {
        document.body.classList.toggle('dark-mode-variables');
        document.getElementById('spanLight').classList.toggle('active');
        document.getElementById('spanDark').classList.toggle('active');
    }

    return (

        <div className="dash_body">
            <div className="dash_container">
                {/* <!-- Sidebar Section --> */}
                <Sidebar />
                {/* <!-- End of Sidebar Section --> */}
                {/* <!-- Main Content --> */}
                <Main orders={orders} />
                {/* <!-- End of Main Content --> */}
                {/* <!-- Right Section --> */}
                <Rightbar menuBtnDisplay={menuBtnDisplay} darkModeDisplay={darkModeDisplay} />

            </div>
        </div>

    );
}
export default BackOfficeAdmin;