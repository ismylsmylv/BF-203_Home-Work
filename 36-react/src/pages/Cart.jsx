import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { SimpleGrid, Card, CardBody, CardFooter, Stack, Image, Heading, Text, Button, ButtonGroup } from '@chakra-ui/react';
import axios from 'axios';
import style from '../style/Layout.module.css';

function Cart() {
    let loginId = localStorage.getItem('loginId');
    const [cartItems, setcartItems] = useState([]);

    useEffect(() => {
        axios(`https://654bcb115b38a59f28efb8ab.mockapi.io/users/${loginId}`).then((res) => {
            setcartItems(res.data.cart);
        });
    }, []);

    return (
        <>
            <Layout />
            {console.log(cartItems)}
            <div className='main container'>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' className={style.grid}>

                    {cartItems.map((elem) => (
                        <Card key={elem.id} maxW='sm' isAdmin={elem.isAdmin}>
                            <CardBody>
                                <Image
                                    className={style.cardImg}
                                    src='https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{elem.name}</Heading>
                                    <Text>
                                        {elem.stock} in stock, {elem.discountPercent} sale
                                    </Text>
                                    <Text color='blue.600' fontSize='2xl'>
                                        ${elem.price}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <CardFooter>
                                <ButtonGroup spacing='2' className={style.cardCart}>
                                    <Button
                                        className={style.cardCartBtn}
                                        variant='solid'
                                        colorScheme='red'
                                        data-id={elem.id}
                                        onClick={(e) => {
                                            let elemObj = {
                                                name: elem.name,
                                                price: elem.id,
                                                discountPercent: elem.discountPercent,
                                                stock: elem.stock,
                                                sold: elem.sold,
                                                id: elem.id,
                                            };
                                            console.log(elemObj);
                                            console.log(loginData.cart);
                                            loginData.cart.push(elemObj);
                                            e.preventDefault();
                                            console.log(e.target.getAttribute('data-id'));
                                            console.log(loginId);
                                            axios.put(`https://654bcb115b38a59f28efb8ab.mockapi.io/users/${loginId}`, {
                                                username: loginData.username,
                                                password: loginData.password,
                                                isAdmin: loginData.isAdmin,
                                                favorites: loginData.favorites,
                                                cart: loginData.cart,
                                                id: loginData.id,
                                            });
                                        }}
                                    >
                                        Remove from cart
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    ))}
                </SimpleGrid>
            </div>

        </>
    );
}

export default Cart;
