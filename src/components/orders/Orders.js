import React from "react";
import { Link } from "react-router-dom";

const Orders = (props) => {
  const {orders} = props
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Total</th>
          <th scope="col">Paid</th>
          <th scope="col">Date</th>
          <th>Status</th>
          <th scope="col" className="text-end">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {
        orders &&  orders.map((order)=>(

            <tr key={order._id}>
            <td>
              GG
             {/* / <b>{order.user.data.e}</b> */}
            </td>
            @example
            {/* <td>{order.user.email}</td> */}
            <td>Tsh{order.grandTotal}</td>
            <td>
              <span className="badge rounded-pill alert-success">
                Paid At Today 23:56 AM
              </span>
            </td>
            <td>Dec 12 2022</td>
            <td>
              <span className="badge btn-success">Delivered</span>
            </td>
            <td className="d-flex justify-content-end align-item-center">
              <Link to={`/order`} className="text-success">
                <i className="fas fa-eye"></i>
              </Link>
            </td>
          </tr>

          ))
        }
       
        {/* Not paid Not delivered */}
     {/* <tr>
          <td>
            <b>Sukari</b>
          </td>
          <td>user@example.com</td>
          <td>Tsh45,789</td>
          <td>
            <span className="badge rounded-pill alert-danger">Not paid</span>
          </td>
          <td>Dec 12 2022</td>
          <td>
            <span className="badge btn-dark">Not Delivered</span>
          </td>
          <td className="d-flex justify-content-end align-item-center">
            <Link to={`/order`} className="text-success">
              <i className="fas fa-eye"></i>
            </Link>
          </td>
      </tr>*/}
      </tbody>
    </table>
  );
};

export default Orders;
