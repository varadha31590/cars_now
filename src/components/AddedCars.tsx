import { useEffect, useState } from "react";
import { ROOT_URL } from "../redux/constants";
import { CarDetail } from "../interfaces";
import { Helper } from "../helper";
import { useFetcher } from "react-router-dom";

interface FilterQuery {
    location: string,
    model: string[],
    numOfOwners: string,
    transmission: string
}
const AddedCars = () => {

    const [addedCars, setAddedCars] = useState([] as CarDetail[]);
    const [filterCondition, setFilterCondition] = useState({
        location: "",
        model: [],
        numOfOwners: "",
        transmission: ""
    } as FilterQuery);

    const [result, setResult] = useState([] as CarDetail[]);

    useEffect(() => {
        let url: string = ROOT_URL + "/added_cars";
        fetch(url)
            .then(res => res.json())
            .then(data => setAddedCars(data))
    }, []);

    useEffect(() => {
        console.log("Filter condition changed , data is ", filterCondition);
        let res: CarDetail[] = Helper.getFilteredData(addedCars, filterCondition);
        setResult(res);
    }, [filterCondition]);



    let locationList: string[] = Helper.getAllLocations(addedCars);
    let modelList: string[] = Helper.getAllModels(addedCars);
    let allNumOfOwners: number[] = Helper.getAllNumOfOwners(addedCars);
    let allTransmissions: string[] = Helper.getAllTransmission(addedCars);


    const onLocationChange = (event: any) => {
        let loc = event.target.value;
        setFilterCondition({ ...filterCondition, location: loc });
    }
    const onModelChange = (event: any) => {
        const { value, checked } = event.target;
        if (checked) {
            let m = filterCondition.model;
            m.push(value);
            setFilterCondition({ ...filterCondition, model: m })
        } else {
            let m = filterCondition.model;
            m = m.filter(i => i !== value);
            setFilterCondition({ ...filterCondition, model: m });
        }
    }

    const onOwnerChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setFilterCondition({...filterCondition, numOfOwners:event.target.value});
    }

    const onTransmissionChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setFilterCondition({...filterCondition, transmission:event.target.value});
    }

    const resetFilter = (event:React.SyntheticEvent) =>{
        setFilterCondition({
            location: "",
            model: [],
            numOfOwners: "",
            transmission: ""
        })
    }
    return (
        <div className="view_cars_list">
            <div className="filter_conditions">Filter conditions
                <table>
                    <tbody>
                        <tr key="location">
                            <td>
                                <div className="label">Location</div>
                                <div className="fields">
                                    <select onChange={onLocationChange} value={filterCondition.location}>
                                        <option hidden>Choose</option>
                                        {locationList.map(l => <option key={l} value={l}>{l}</option>)}
                                    </select>
                                </div>

                            </td>
                        </tr>
                        <tr key="model">
                            <td>
                                <div className="label">Model</div>
                                <div className="fields">
                                    {modelList.map(m =>
                                        <label>{m}
                                        <input name="model" type="checkbox" 
                                        value={m} 
                                        onChange={onModelChange} 
                                        />
                                        </label>
                                    )}
                                </div>

                            </td>
                        </tr>
                        <tr key="owner">
                            <td>
                                <div className="label">Owner</div>
                                <div className="fields">
                                    {allNumOfOwners.map(o =>
                                        <label>{o} <input name="owner" 
                                        type="radio" 
                                        value={o} 
                                        onChange={onOwnerChange}
                                        /></label>
                                    )}
                                </div>
                            </td>
                        </tr>
                        <tr key="transmission">
                            <td>
                                <div className="label">Transmission</div>
                                <div className="fields">
                                    {allTransmissions.map(t =>
                                         <label>{t}<input name="transmission" 
                                         type="radio" 
                                         value={t} 
                                         onChange={onTransmissionChange}
                                         /></label>)}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="filterd_cars">
                <div className="cart_list result_list">
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
                            {result.length === 0 && <tr><td style={{ textAlign: "center" }} colSpan={10}>No records</td></tr>}
                            {
                                result.map((c, index) =>
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
            </div>
        </div>
    );
}

export default AddedCars;