import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { SimpleGrid, Card, CardBody, CardFooter, Stack, Image, Heading, Text, Button, ButtonGroup } from '@chakra-ui/react';
import axios from 'axios';
import style from '../style/Layout.module.css';
import { v4 as uuidv4 } from 'uuid';

function Requests() {
    let loginId = localStorage.getItem('loginId');
    const [ReqItems, setReqItems] = useState([]);
    const [ReqItemsAll, setReqItemsAll] = useState([]);
    const [loginData, setloginData] = useState([]);
    const [users, setusers] = useState([]);
    const [user, setuser] = useState([]);
    useEffect(() => {
        // axios(`https://654bcb115b38a59f28efb8ab.mockapi.io/users/`).then((res) => {
        //     setusers(res.data)
        //     console.log(users)

        // });
        axios(`https://654bcb115b38a59f28efb8ab.mockapi.io/users/${loginId}`).then((res) => {
            setuser(res.data)
            console.log(user)

        }).then(user.requests?.map(elem => {
            return setReqItems([...ReqItems, elem])
        }));

    }, []);

    const removeWishlist = (itemId) => {
        const sentReq = ReqItems.filter((element) => element.id !== itemId);
        setReqItems(sentReq);

        axios.put(`https://654bcb115b38a59f28efb8ab.mockapi.io/users/${loginId}`, {
            username: loginData.username,
            password: loginData.password,
            friends: loginData.friends,
            requests: ReqItems,
            id: loginData.id,
        }).then(() => console.log("removed"));
    };

    return (
        <>
            <Layout />
            {console.log(ReqItemsAll)}
            <div className='main container'>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' className={style.grid}>
                    {user.requests?.map((elem) => (
                        <Card key={uuidv4()} maxW='sm' isadmin={elem.isadmin}>
                            <CardBody>
                                <Image
                                    className={style.cardImg}
                                    src='https://cdn.worldvectorlogo.com/logos/ligam.svg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{elem.username}</Heading>
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
                                        Deny request
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

export default Requests;
