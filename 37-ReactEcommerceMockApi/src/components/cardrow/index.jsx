import React, { useState } from 'react';
import {
    Button, ButtonGroup,
    Card,
    CardBody, CardFooter,
    Heading,
    Image,
    Stack,
    Text
} from '@chakra-ui/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFontAwesome, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect } from 'react';
import style from "../../assets/style/Layout.module.css";
import { getUsers, getUser, putUser } from '../../../middleware/api/users'

library.add(fas, faTwitter, faFontAwesome, faHeart)



function CardRow({ elem, prods, editId, seteditId, setprods, isadmin, editProd, seteditProd }) {
    const [loginData, setloginData] = useState([]);
    const [cartCount, setcartCount] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    let cartLength
    let loginId = JSON.parse(localStorage.getItem("loginId"))
    useEffect(() => {
        getUser(loginId).then(res => {
            setloginData(res)
            setIsFavorite(res.favorites?.some((item) => item.id === elem.id) || false);
        })
    }, []);



    return (
        <>
            <Card maxW='sm' isadmin={isadmin} >
                <CardBody className={style.cardBody}>
                    <div className={`btnConts ${style.btnConts}`}>
                        <Button variant='ghost' colorScheme='green' className={style.favBtn} data-id={elem.id}>
                            {elem.discountPercent != "false" ? <>SALE</> : null}
                        </Button>
                        <Button variant='ghost' colorScheme='red'
                            className={style.favBtn}
                            data-id={elem.id}
                            onClick={(e) => {
                                e.preventDefault();
                                if (!loginData.favorites?.some((item) => item.id === elem.id)) {
                                    let elemObj = {
                                        "name": elem.name,
                                        "price": elem.id,
                                        "discountPercent": elem.discountPercent,
                                        "stock": elem.stock,
                                        "sold": elem.sold,
                                        "id": elem.id
                                    }
                                    loginData.favorites.push(elemObj);
                                    let favObj = {
                                        "username": loginData.username,
                                        "password": loginData.password,
                                        "isadmin": loginData.isadmin,
                                        "favorites": loginData.favorites,
                                        "cart": loginData.cart,
                                        "id": loginData.id
                                    }
                                    putUser(loginId, favObj)
                                    setIsFavorite(true);
                                } else {
                                    let newFavorites = loginData.favorites.filter((item) => item.id !== elem.id);
                                    axios.put("https://654bcb115b38a59f28efb8ab.mockapi.io/users/" + loginId, {
                                        "username": loginData.username,
                                        "password": loginData.password,
                                        "isadmin": loginData.isadmin,
                                        "favorites": newFavorites,
                                        "cart": loginData.cart,
                                        "id": loginData.id
                                    });
                                    setIsFavorite(false);
                                }
                            }}
                        >
                            {isFavorite ? <FontAwesomeIcon icon={['fas', 'heart']} /> : <FontAwesomeIcon icon={['far', 'heart']} />}
                        </Button>
                    </div>
                    <Image className={style.cardImg}
                        src='https://cdn.worldvectorlogo.com/logos/ligam.svg'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'> {elem.name}</Heading>
                        <Text>
                            {elem.stock} in stock
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
                                    let cartObj = {
                                        "cart": loginData.cart,
                                        "username": loginData.username,
                                        "password": loginData.password,
                                        "isadmin": loginData.isadmin,
                                        "favorites": loginData.favorites,
                                        "id": loginData.id
                                    }
                                    putUser(loginId, cartObj)
                                    setcartCount(cartCount + 1)
                                } else {
                                    console.log("in cart");
                                }
                            }}
                        >
                            Add to cart
                        </Button>


                    </ButtonGroup>

                </CardFooter>
                <div className={style.adminBtns}>
                    {isadmin && (
                        <Button className={style.adminBtn}
                            data-id={elem.id}
                            colorScheme='cyan'
                            onClick={(e) => {
                                seteditId(e.target.getAttribute("data-id"))
                                console.log('edit');
                                seteditProd(!editProd)
                            }}
                        >
                            Edit
                        </Button>
                    )}
                    {isadmin && (

                        <Button className={style.adminBtn}
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
                </div>
            </Card >
        </>
    );
}

export default CardRow;
