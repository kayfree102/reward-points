import Customer from "./Customer";
import { dataCustomers} from "./dataPurchases";
import { Link } from "react-router-dom";

const Transactions = () => {
    return(
        <>
        <Link to = "/">
            <h3>View Reward Points</h3>
        </Link>
        <div className="customer-container">
        <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Purchase</th>
                        <th>Date</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
            {dataCustomers.map((data, key)=> {
                return (
                        <Customer 
                         key={key}
                         id={data.id}
                         name={data.name}
                         purchase={data.purchase}
                         date={data.date}
                        />
                );
            })}
            </tbody>
            </table>
            </div>
            </>
    )
}
export default Transactions;