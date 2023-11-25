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



function CardRow({ elem }) {
    const [loginData, setloginData] = useState([]);
    const [blockCount, setBlockCount] = useState(0);
    const [friendCount, setfriendCount] = useState(0);
    const [isFriend, setIsFriend] = useState(false);
    let blockedLength
    let loginId = JSON.parse(localStorage.getItem("loginId"))
    useEffect(() => {
        axios("https://654bcb115b38a59f28efb8ab.mockapi.io/users/" + loginId).then(res => {
            setloginData(res.data)
            setIsFriend(res.data.friends?.some((item) => item.id == elem.id) || false);
            console.log(loginData)
        })
        setBlockCount((loginData.blocked ? loginData.blocked.length : 0));
        setfriendCount((loginData.friends ? loginData.friends.length : 0));
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
                        {/* add friend */}
                        <Button className={style.cardCartBtn} variant='solid' colorScheme='blue'
                            data-id={elem.id}

                            onClick={(e) => {
                                e.preventDefault();
                                if (!loginData.requests?.some((item) => item.id === elem.id)) {
                                    let req = elem.requests || [];
                                    let obj = {
                                        "username": loginData.username,
                                        "password": loginData.password,
                                        "friends": loginData.friends,
                                        "requests": loginData.requests,
                                        "blocked": loginData.blocked,
                                        "id": loginData.id
                                    }
                                    req.push(obj)
                                    axios.put("https://654bcb115b38a59f28efb8ab.mockapi.io/users/" + elem.id, {
                                        "username": elem.username,
                                        "password": elem.password,
                                        "friends": elem.friends,
                                        "requests": req,
                                        "blocked": elem.blocked,
                                        "id": elem.id
                                    })

                                    console.log("added request")
                                    // setBlockCount(cartCount + 1)
                                } else {
                                    console.log("request sent");
                                }
                            }}
                        >
                            Add friend
                        </Button>
                        <Button variant='solid' colorScheme='red'
                            data-id={elem.id}
                            onClick={(e) => {
                                e.preventDefault();
                                if (!loginData.blocked.some((item) => item.id === elem.id)) {
                                    let elemObj = {
                                        "username": elem.name,
                                        "password": elem.password,
                                        "friends": elem.friends,
                                        "requests": elem.requests,
                                        "blocked": elem.blocked,
                                        "id": elem.id
                                    }
                                    loginData.cart.push(elemObj);
                                    axios.put("https://654bcb115b38a59f28efb8ab.mockapi.io/users/" + loginId, {
                                        "username": loginData.username,
                                        "password": loginData.password,
                                        "friends": loginData.friends,
                                        "requests": loginData.requests,
                                        "blocked": loginData.blocked,
                                        "id": loginData.id
                                    })
                                    setblockedCount(blockedCount + 1)
                                } else {
                                    console.log("in cart");
                                }
                            }}
                        >
                            <FontAwesomeIcon icon="fa-solid fa-ban" />
                        </Button>


                    </ButtonGroup>

                </CardFooter>
            </Card >
        </>
    );
}

export default CardRow;
