import {
    Button,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { getUsers } from '../../../middleware/api/users'

function TableUsers() {
    const [users, setusers] = useState([]);
    // useEffect(() => {
    //     axios("https://654bcb115b38a59f28efb8ab.mockapi.io/users").then(res => {
    //         setusers(res.data)
    //     })
    // }, []);
    useEffect(() => {
        getUsers().then(res => {
            setusers(res)
        })
    }, []);

    return (
        <>
            <h2 className='thead'>Users</h2>

            <TableContainer bg={"white"}>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>id</Th>
                            <Th>name</Th>
                            <Th>password</Th>
                            <Th>delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            users.map(elem => {
                                return <Tr key={uuidv4()}>
                                    <Td>{elem.id}</Td>
                                    <Td>{elem.username}</Td>
                                    <Td>{elem.password}</Td>
                                    <Td>
                                        <Button
                                            colorScheme='red'
                                            data-id={elem.id}
                                            onClick={(e) => {
                                                axios.delete("https://654bcb115b38a59f28efb8ab.mockapi.io/users/" + elem.id)

                                                // for (let element of prods) {
                                                //     if (elem.id !== element.id) {
                                                //         console.log(elem);
                                                //         setprods([...prods]);
                                                //     }
                                                // }
                                                let userArr = [...users]
                                                userArr = userArr.filter((user) => user.id !== e.target.getAttribute("data-id"));
                                                setusers(userArr);


                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </Td>
                                </Tr>
                            }
                            )
                        }
                    </Tbody>
                </Table>
            </TableContainer >
        </>
    )
}

export default TableUsers