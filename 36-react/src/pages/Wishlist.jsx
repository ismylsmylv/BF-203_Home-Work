import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { SimpleGrid, Card, CardBody, CardFooter, Stack, Image, Heading, Text, Button, ButtonGroup } from '@chakra-ui/react';
import axios from 'axios';
import style from '../style/Layout.module.css';
import { v4 as uuidv4 } from 'uuid';

function Wishlist() {
    let loginId = localStorage.getItem('loginId');
    const [WishlistItems, setWishlistItems] = useState([]);
    const [loginData, setloginData] = useState([]);

    useEffect(() => {
        axios(`https://654bcb115b38a59f28efb8ab.mockapi.io/users/${loginId}`).then((res) => {
            setWishlistItems(res.data.favorites);
            setloginData(res.data);
        });
    }, []);

    const removeWishlist = (itemId) => {
        const addedWish = WishlistItems.filter((element) => element.id !== itemId);
        setWishlistItems(addedWish);

        axios.put(`https://654bcb115b38a59f28efb8ab.mockapi.io/users/${loginId}`, {
            username: loginData.username,
            password: loginData.password,
            isAdmin: loginData.isAdmin,
            favorites: addedWish,
            cart: loginData.favorites,
            id: loginData.id,
        }).then(() => console.log("removed"));
    };

    return (
        <>
            <Layout />
            {console.log(WishlistItems)}
            <div className='main container'>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' className={style.grid}>
                    {WishlistItems.map((elem) => (
                        <Card key={uuidv4()} maxW='sm' isAdmin={elem.isAdmin}>
                            <CardBody>
                                <Image
                                    className={style.cardImg}
                                    src='https://cdn.worldvectorlogo.com/logos/ligam.svg'
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
                                <ButtonGroup spacing='2' className={style.cardWishlist}>
                                    <Button
                                        className={style.cardCartBtn}
                                        variant='solid'
                                        colorScheme='red'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            removeWishlist(elem.id);
                                        }}
                                    >
                                        Remove from favorites
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

export default Wishlist;
