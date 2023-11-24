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
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fas, faTwitter, faFontAwesome, faHeart)



function CardRow({ elem, prods, editId, seteditId, setprods, isadmin, editProd, seteditProd }) {
    const [loginData, setloginData] = useState([]);
    const [cartCount, setcartCount] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    let cartLength
    let loginId = JSON.parse(localStorage.getItem("loginId"))
    useEffect(() => {
        axios("https://654bcb115b38a59f28efb8ab.mockapi.io/users/" + loginId).then(res => {
            setloginData(res.data)
            cartLength = res.data.cart ? res.data.cart.length : 0;
            setcartCount(cartLength);
            setIsFavorite(res.data.favorites?.some((item) => item.id === elem.id) || false);
        })
    }, []);


    return (
        <>
            <Card maxW='sm' >
                <CardBody className={style.cardBody}>
                    <Image className={style.cardImg}
                        src='https://cdn.worldvectorlogo.com/logos/ligam.svg'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'> {elem.username}</Heading>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <ButtonGroup spacing='2' className={style.cardCart} >
                        <Button className={style.cardCartBtn} variant='solid' colorScheme='blue'
                            data-id={elem.id}
                            onClick={(e) => {
                                e.preventDefault();
                                if (!loginData.cart.some((item) => item.id === elem.id)) {
                                    let elemObj = {
                                        "name": elem.name,
                                        "price": elem.id,
                                        "discountPercent": elem.discountPercent,
                                        "stock": elem.stock,
                                        "sold": elem.sold,
                                        "id": elem.id
                                    }
                                    loginData.cart.push(elemObj);
                                    axios.put("https://654bcb115b38a59f28efb8ab.mockapi.io/users/" + loginId, {
                                        "username": loginData.username,
                                        "password": loginData.password,
                                        "isadmin": loginData.isadmin,
                                        "favorites": loginData.favorites,
                                        "cart": loginData.cart,
                                        "id": loginData.id
                                    })
                                    setcartCount(cartCount + 1)
                                } else {
                                    console.log("in cart");
                                }
                            }}
                        >
                            Add friend
                        </Button>


                    </ButtonGroup>

                </CardFooter>
            </Card >
        </>
    );
}

export default CardRow;
