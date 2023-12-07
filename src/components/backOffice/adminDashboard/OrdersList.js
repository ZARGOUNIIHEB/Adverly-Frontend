
/////////////////// Components /////////////////
import Order from './Order';


const OrdersList = ({ orders }) => {
    console.log(orders);

    return (
        <>
            {orders.map((orders) => <Order key={orders.id} orders={orders} />)}
        </>
    );
}
export default OrdersList;