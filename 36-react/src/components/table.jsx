import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import axios from 'axios'
import CardRow from './CardRow'
import TableUsers from './tableUsers'
import { v4 as uuidv4 } from 'uuid';
import AddProd from './addprod'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text } from '@chakra-ui/react'
import Contact from "../pages/Contact"
import Layout from "../pages/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "../style/Layout.module.css"

function TableMain({ isAdmin }) {
    const [prods, setprods] = useState([]);
    const [addProd, setaddProd] = useState(false);
    useEffect(() => {
        axios("https://654bcb115b38a59f28efb8ab.mockapi.io/products").then(res => {
            setprods(res.data)
        })
    }, []);
    return (
        <>
            <Layout />

            <div className='main container'>
                <h2 className='thead'>Products</h2>
                <Button colorScheme='purple' className={style.addbtn} onClick={(e) => {
                    setaddProd(!addProd);
                    console.log(addProd)
                }}>
                    Add product
                </Button>
                {addProd && <AddProd addProd={addProd} setaddProd={setaddProd} prods={prods} setprods={setprods} />}
                {/* table */}
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' className={style.grid}>
                    {
                        prods.map(elem => {
                            return (
                                <CardRow key={uuidv4()} elem={elem} prods={prods} setprods={setprods} isAdmin={isAdmin} />)
                        })
                    }
                </SimpleGrid>


                {
                    isAdmin && <TableUsers />
                }

            </div >

        </>

    )
}

export default TableMain