import { useSelector } from "react-redux";
import { RootState } from "../redux/store"; 
import { CarDetail } from "../interfaces";


const CartList = () => {

    const car_list: CarDetail[] = useSelector((state: RootState) => state.carReducer);
    return (
        <div className="cart_list">
            <table>
                <tbody>
                    <tr>
                        <th>Company</th>
                        <th>Model</th>
                        <th>Color</th>
                        <th>Manufacture Date</th>
                        <th>Insurance Expiry</th>
                        <th>Total Kilometers</th>
                        <th>Num of Owners</th>
                        <th>Location</th>
                        <th>Transmission</th>
                        <th>External Fitments</th>
                    </tr>
                    {
                        car_list.map((c, index) =>
                            <tr key={index}>
                                <td>{c.companyName}</td>
                                <td>{c.model}</td>
                                <td>{c.color}</td>
                                <td>{c.mfd}</td>
                                <td>{c.insuranceExpiry}</td>
                                <td>{c.totalKilometers}</td>
                                <td>{c.numOfOwners}</td>
                                <td>{c.location}</td>
                                <td>{c.transmission}</td>
                                <td>{c.externalFitments}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default CartList;