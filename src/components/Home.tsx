import { useDispatch, useSelector } from "react-redux";
import CompaniesList from "./CompaniesList";
import CartList from "./CartList";
import Form from "./Form";
import { SelectionContext } from "./SelectionContext";
import { RootState } from "../redux/store";

import { useState } from "react";

function Home() {
    const carList = useSelector((state: RootState) => state.carReducer);


    const [comp, setCompany] = useState("");

    const handleSelection = (value: string) => {
        setCompany(value);
    }

    return (
        <div className="home">
            <SelectionContext.Provider value={comp}>
                <CompaniesList handleSelection={handleSelection} />
                {comp !== "" && <Form comp={comp} />}
            </SelectionContext.Provider>

            {carList.length > 0 && <CartList />}
        </div>
    );
}

export default Home;