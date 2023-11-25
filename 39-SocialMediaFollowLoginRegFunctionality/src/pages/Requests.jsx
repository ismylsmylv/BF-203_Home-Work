import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { SimpleGrid, Card, CardBody, CardFooter, Stack, Image, Heading, Button, ButtonGroup } from '@chakra-ui/react';
import axios from 'axios';
import style from '../style/Layout.module.css';
import { v4 as uuidv4 } from 'uuid';

function Requests() {
    let loginId = localStorage.getItem('loginId');
    const [user, setUser] = useState([]);
    const [reqItems, setReqItems] = useState([]);
    const [reqDeny, setReqDeny] = useState(false);

    useEffect(() => {
        axios(`https://654bcb115b38a59f28efb8ab.mockapi.io/users/${loginId}`)
            .then((res) => {
                setUser(res.data);
                setReqItems(res.data.requests || []);
            });
    }, []);


    // remove request
    const removeRequest = (itemId) => {
        const updatedRequests = reqItems.filter((element) => element.id !== itemId);

        axios.put(`https://654bcb115b38a59f28efb8ab.mockapi.io/users/${loginId}`, {
            ...user,
            requests: updatedRequests,
        })
            .then(() => {
                setReqItems(updatedRequests);
                setReqDeny(true);
            })
    };
    // accept request
    const accRequest = (itemId, senderUsername) => {
        const updatedRequests = reqItems.filter((element) => element.id !== itemId);
        const updatedFriends = [...user.friends, { id: itemId, username: senderUsername }];

        axios.put(`https://654bcb115b38a59f28efb8ab.mockapi.io/users/${loginId}`, {
            ...user,
            requests: updatedRequests,
            friends: updatedFriends,
        })
            .then(() => {
                setReqItems(updatedRequests);
                setReqDeny(true);
            })


        axios.get(`https://654bcb115b38a59f28efb8ab.mockapi.io/users`)
            .then((res) => {
                const sender = res.data.find((userData) => userData.requests?.some((request) => request.id === itemId));

                if (sender) {
                    const updatedSenderFriends = [...sender.friends, { id: loginId, username: user.username }];

                    axios.put(`https://654bcb115b38a59f28efb8ab.mockapi.io/users/${sender.id}`, {
                        ...sender,
                        friends: updatedSenderFriends,
                    })
                        .then(() => {
                            console.log('added friend');
                        })

                }
            })
    };



    return (
        <>
            <Layout />
            <div className='main container'>
                <h2 className={`'thead' ${style.thead}`}>Requests</h2>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' className={style.grid}>
                    {reqItems.map((elem) => (
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
                                        colorScheme='green'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            accRequest(elem.id);
                                        }}
                                    >
                                        Accept
                                    </Button>
                                    <Button
                                        className={style.cardCartBtn}
                                        variant='solid'
                                        colorScheme='red'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            removeRequest(elem.id);
                                        }}
                                    >
                                        Deny
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
