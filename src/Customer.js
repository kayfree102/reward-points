const Customer = ({ id, name, purchase, date }) => {
    let price = Math.floor(Number(purchase.slice(1)));
    let onePoint = price - 50;
    let twoPoint = price > 100 ? (price-100)*2 : 0;
    let totalPoints = price > 50 ? onePoint + twoPoint : 0;
    if (!id) return <div />;
    return (
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
            <td>
              <h4>{totalPoints}</h4>
            </td>
          </tr>
    );
  };
export default Customer;