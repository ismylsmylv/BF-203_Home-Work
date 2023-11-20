import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from "../../assets/style/Layout.module.css";
import { getProds } from '../../../middleware/api/products'
function Search({ setprods }) {
    const [datas, setdatas] = useState([]);
    const [results, setresults] = useState([]);
    const [listResults, setlistResults] = useState(false);


    // useEffect(() => {
    //     axios("https://654bcb115b38a59f28efb8ab.mockapi.io/products").then(res => {
    //         setdatas(res.data);
    //     });
    // }, []);
    useEffect(() => {
        getProds().then(res => {
            setdatas(res)
        })
    }, []);

    return (
        <div className={style.searchContainer}>
            <input
                className={style.inputSearch}
                type="text"
                placeholder='Search products'
                onChange={(e) => {
                    const searched = e.target.value.toLowerCase().trim();
                    const result = datas.filter(elem =>
                        elem.name.toLowerCase().includes(searched)
                    );
                    setresults(result);
                    setlistResults(searched);
                    {
                        listResults && (
                            setprods(result)
                            // <div className={style.listCont}>
                            //     {results.map(elem => (
                            //         <div key={uuidv4()}>{elem.name}</div>
                            //     ))}
                            // </div>
                        )
                    }
                }}
            />

        </div>
    );
}

export default Search;
