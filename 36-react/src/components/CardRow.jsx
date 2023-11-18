import React, { useState } from 'react';

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
    Stack,
    Image
} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text } from '@chakra-ui/react'
import { useEffect } from 'react';
import style from "../style/Layout.module.css"



function CardRow({ elem, prods, setprods, isAdmin }) {
    const [loginData, setloginData] = useState([]);
    let loginId = JSON.parse(localStorage.getItem("loginId"))
    useEffect(() => {
        axios("https://654bcb115b38a59f28efb8ab.mockapi.io/users/" + loginId).then(res => {
            setloginData(res.data)
        })
    }, []);


    return (
        <>
            <Card maxW='sm' isAdmin={isAdmin} >
                <CardBody>
                    <Button variant='ghost' colorScheme='red'
                        data-id={elem.id}
                        onClick={(e) => {
                            let finder = loginData.favorites
                            finder = finder.map(element => {
                                (loginData.favorites.includes(element) &&

                                    console.log("first")
                                )
                            })
                            console.log(finder)

                            let elemObj = {
                                "name": elem.name,
                                "price": elem.id,
                                "discountPercent": elem.discountPercent,
                                "stock": elem.stock,
                                "sold": elem.sold,
                                "id": elem.id
                            }
                            loginData.favorites.push(elemObj)
                            e.preventDefault()
                            console.log(e.target.getAttribute("data-id"))
                            console.log(loginId)
                            axios.put("https://654bcb115b38a59f28efb8ab.mockapi.io/users/" + loginId, {
                                "username": loginData.username,
                                "password": loginData.password,
                                "isAdmin": loginData.isAdmin,
                                "favorites": loginData.favorites,
                                "cart": loginData.cart,
                                "id": loginData.id
                            })

                        }}
                    >
                        Favorite
                    </Button>
                    <Image className={style.cardImg}
                        src='https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'> {elem.name}</Heading>
                        <Text>
                            {elem.stock} in stock, {elem.discountPercent} sale
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            ${elem.price}
                        </Text>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <ButtonGroup spacing='2' className={style.cardCart} >
                        <Button className={style.cardCartBtn} variant='solid' colorScheme='blue'
                            data-id={elem.id}
                            onClick={(e) => {

                                let elemObj = {
                                    "name": elem.name,
                                    "price": elem.id,
                                    "discountPercent": elem.discountPercent,
                                    "stock": elem.stock,
                                    "sold": elem.sold,
                                    "id": elem.id
                                }
                                console.log(elemObj)
                                console.log(loginData.cart)
                                loginData.cart.push(elemObj)
                                e.preventDefault()
                                console.log(e.target.getAttribute("data-id"))
                                console.log(loginId)
                                axios.put("https://654bcb115b38a59f28efb8ab.mockapi.io/users/" + loginId, {
                                    "username": loginData.username,
                                    "password": loginData.password,
                                    "isAdmin": loginData.isAdmin,
                                    "favorites": loginData.favorites,
                                    "cart": loginData.cart,
                                    "id": loginData.id
                                })

                            }}
                        >
                            Add to cart
                        </Button>


                    </ButtonGroup>
                    {isAdmin && (
                        <Button
                            colorScheme='cyan'
                            onClick={() => {
                                console.log('first');
                            }}
                        >
                            Edit
                        </Button>
                    )}
                    {isAdmin && (

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
                    )}
                </CardFooter>
            </Card>
        </>
    );
}

export default CardRow;
