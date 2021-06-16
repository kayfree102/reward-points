
import React from "react";
import "./App.css";
import { dataCustomers } from "./dataPurchases";




export const Customers = () => {
    return (
        <> 
        <HomePageHeader/>
        <div className="customer-container">
            {dataCustomers.map((data, key)=> {
                return (
                    <div key={key}>
                        <Customer 
                         key={key}
                         id={data.id}
                         name={data.name}
                         purchase={data.purchase}
                         date={data.date}


                         
                        />
                         </div>
                );
            })}
            </div>
        </>
    );
};

const HomePageHeader = () => {
    return (
      <header className="header">
        <h2>Reward Tracker</h2>
      </header>
    );
  };


  const Customer = ({ id, name, purchase, date }) => {
    if (!id) return <div />;
    return (
      <table>
        <tbody>
            
          <tr>
            <td>
              <h5>{id}</h5>
            </td>
            <td>
              <h5>{name}</h5>
            </td>
            <td>
              <p>{purchase}</p>
            </td>
            <td>
              <h4>{date}</h4>
            </td>
            
            {/* <td>
              <h4>
                  <script type= "text/javascript>">
                   {console.log (purchasePoints)}
                </script>
                </h4>
            </td> */}
          </tr>
        </tbody>
      </table>
    );
  };



  
//REWARD POINT CALCUlATIONS

 function transactionPoints() {
    let purchasePoints = 0 
    let purchase = this.purchase;
    if (purchase <50){
        purchasePoints =0;
        return(purchasePoints);
    } else if ((Math.floor(purchase) <= 100) && ((Math.floor(purchase) > 50))) {
           purchasePoints = purchase - 100;
           return(purchasePoints);
       } else {
           purchasePoints =((purchase-100)*2) +50;
           return(purchasePoints);
       }
    }



















  //   const Customer = ({ id, name, purchase, date }) => {
//     if (!id) return <div />;
//     return (
//       <table>
//         <tbody>
            
//           <tr>
//             {/* <td>
//               <h5>{id}</h5>
//             </td> */}
//             <td>
//               <h5>{name}</h5>
//             </td>
//             <td>
//               <h4>{purchase}</h4>
//             </td>
//             <td>
//               <p>{date}</p>
//             </td>
//             <td>
//               <h4>{purchase}</h4>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   };