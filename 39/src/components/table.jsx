import { SimpleGrid } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Layout from "../pages/Layout"
import style from "../style/Layout.module.css"
import CardRow from './CardRow'

function TableMain() {
    const [prods, setprods] = useState([]);
    useEffect(() => {
        axios("https://654bcb115b38a59f28efb8ab.mockapi.io/users").then(res => {
            setprods(res.data)
        })
    }, []);
    return (
        <>
            <Layout setprods={setprods} />

            <div className='main container'>

                {/* table */}
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' className={style.grid}>
                    {
                        prods.map(elem => {
                            return (
                                <CardRow key={uuidv4()} elem={elem} prods={prods} />)
                        })
                    }
                </SimpleGrid>




            </div >

        </>

    )
}

export default TableMain