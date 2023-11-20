import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from "../assets/style/Layout.module.css";
import Layout from './Layout';
import { getUser, putUser } from '../../middleware/api/users';

function Wishlist() {
    let loginId = localStorage.getItem('loginId');
    const [WishlistItems, setWishlistItems] = useState([]);
    const [loginData, setloginData] = useState([]);

    useEffect(() => {
        getUser(loginId).then((res) => {
            setWishlistItems(res.favorites);
            setloginData(res);
        });
    }, []);

    const removeWishlist = (itemId) => {
        const addedWish = WishlistItems.filter((element) => element.id !== itemId);
        setWishlistItems(addedWish);
        let objPut = {
            username: loginData.username,
            password: loginData.password,
            isadmin: loginData.isadmin,
            favorites: addedWish,
            cart: loginData.favorites,
            id: loginData.id,
        }
        putUser(loginId, objPut)
    };

    return (
        <>
            <Layout />
            {console.log(WishlistItems)}
            <div className='main container'>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' className={style.grid}>
                    {WishlistItems.map((elem) => (
                        <Card key={uuidv4()} maxW='sm' isadmin={elem.isadmin}>
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
                                        {elem.stock} in stock
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
                                        onClick={(e) => {
                                            e.preventDefault();
                                            removeWishlist(elem.id);
                                        }}
                                    >
                                        Remove favorite
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
