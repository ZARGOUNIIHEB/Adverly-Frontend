
const Order = ({ orders }) => {
    return (
        <tr>
            <td> {orders.productName}</td >
            <td>{orders.productNumber}</td>
            <td>{orders.paymentStatus}</td>
            <td className={orders.status === 'Declined' ? 'danger' : orders.status === 'Pending' ? 'warning' : 'primary'}>{orders.status}</td>
            <td className="primary">Details</td>
        </tr>
    );
}

export default Order;




// {
//     Orders.map((movie, index) => (
//         <MovieCard key={index} handleChecked={handleChecked} movie={movie} />
//     ))
// }
// <>
//     <td> {el.productName}</td >
//     <td>{el.productNumber}</td>
//     <td>{el.paymentStatus}</td>
//     <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">{el.status}</td>
//     <td class="primary">Details</td>
// </>