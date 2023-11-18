import React from 'react'
import Layout from './Layout'
import { Axios } from 'axios'
import { useState } from 'react';

import {
    Stack,
    Image
} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text } from '@chakra-ui/react'
import { useEffect } from 'react';
import style from "../style/Layout.module.css"
function Cart() {
    let loginId = localStorage.getItem("loginId")
    const [cartItems, setcartItems] = useState([]);
    useEffect(() => {
        {
            axios("https://654bcb115b38a59f28efb8ab.mockapi.io/users/" + loginId).then(res => {
                setcartItems(res.data)
                console.log(cartItems)
            })
        }
    }, []);
    return (
        <>
            <Layout />

        </>

    )
}

export default Cart