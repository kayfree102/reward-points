const Rewards = ({rewardsArray})=>{
    return(
        <>
       
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>June</th>
                    <th>July</th>
                    <th>August</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {rewardsArray.map((item) =>(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item["6"]}</td>
                        <td>{item["7"]}</td>
                        <td>{item["8"]}</td>
                        <td>{item.total}</td>
                        
                    </tr>
                ))}

            </tbody>
        </table>
        </>
    )
}
export default Rewards;