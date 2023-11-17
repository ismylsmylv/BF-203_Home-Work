import React from 'react';
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
} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import axios from 'axios';

function Tablerow({ elem, prods, setprods, isAdmin }) {
    return (
        <>
            <Td>{elem.id}</Td>
            <Td>{elem.name}</Td>
            <Td>{elem.price}</Td>
            <Td>{elem.stock}</Td>
            <Td>{elem.discountPercent}</Td>
            {isAdmin && (
                <Td>
                    <Button
                        colorScheme='cyan'
                        onClick={() => {
                            console.log('first');
                        }}
                    >
                        Edit
                    </Button>
                </Td>
            )}
            {isAdmin && (
                <Td>
                    <Button
                        colorScheme='red'
                        data-id={elem.id}
                        onClick={(e) => {
                            axios.delete("https://654bcb115b38a59f28efb8ab.mockapi.io/products/" + elem.id)

                            // for (let element of prods) {
                            //     if (elem.id !== element.id) {
                            //         console.log(elem);
                            //         setprods([...prods]);
                            //     }
                            // }
                            let prodArr = [...prods]
                            prodArr = prodArr.filter((prod) => prod.id !== e.target.getAttribute("data-id"));
                            setprods(prodArr);
                        }}
                    >
                        Delete
                    </Button>
                </Td>
            )}

        </>
    );
}

export default Tablerow;
