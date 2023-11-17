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
import Tablerow from './tablerow'
import TableUsers from './tableUsers'
import { v4 as uuidv4 } from 'uuid';


function TableMain({ isAdmin }) {
    const [prods, setprods] = useState([]);
    useEffect(() => {
        axios("https://654bcb115b38a59f28efb8ab.mockapi.io/products").then(res => {
            setprods(res.data)
        })
    }, []);
    return (
        <div className='main'>
            <h2 className='thead'>Products</h2>
            <TableContainer bg={"white"}>
                <Table variant='simple'>
                    <Thead>
                        <Tr isAdmin={isAdmin}>
                            <Th>id</Th>
                            <Th>name</Th>
                            <Th>price</Th>
                            <Th>stockCount</Th>
                            <Th>sale</Th>
                            {isAdmin && (<Th>edit</Th>)}
                            {isAdmin && (<Th>delete</Th>)}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            prods.map(elem => {
                                if (elem.stock < 10) {
                                    // text color red
                                    return <Tr bg={"red"} key={uuidv4()}>
                                        <Tablerow elem={elem} prods={prods} setprods={setprods} isAdmin={isAdmin} />
                                    </Tr>
                                }
                                if (elem.discountPercent == "true") {
                                    return <Tr bg={"green"} key={uuidv4()}>
                                        <Tablerow elem={elem} prods={prods} setprods={setprods} isAdmin={isAdmin} />
                                    </Tr>
                                }
                                else {
                                    return <Tr key={uuidv4()}>
                                        <Tablerow elem={elem} prods={prods} setprods={setprods} isAdmin={isAdmin} />
                                    </Tr>
                                }
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
            {
                isAdmin && <TableUsers />
            }
        </div>)
}

export default TableMain