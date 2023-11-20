import { Button } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getProd } from '../../../middleware/api/products';

function EditProd({ editProd, seteditProd, prods, setprods, editId, seteditId }) {
    const [editName, seteditName] = useState('');
    const [editPrice, seteditPrice] = useState(0);
    const [editStock, seteditStock] = useState(0);
    const [editSale, seteditSale] = useState('');
    useEffect(() => {
        getProd(id)
            .then((res) => {
                seteditName(res.name);
                seteditPrice(res.price);
                seteditStock(res.stock);
                seteditSale(res.onsale);
            })
    }, [editId]);

    return (
        <div className='addInps editInps'>
            <input
                className='addInp editInp'
                type='text'
                placeholder='name'
                value={editName}
                onChange={(e) => {
                    seteditName(e.target.value);
                }}
            />
            <input
                className='addInp editInp'
                type='number'
                placeholder='price'
                value={editPrice}
                onChange={(e) => {
                    seteditPrice(e.target.value);
                }}
            />
            <input
                className='addInp editInp'
                type='number'
                placeholder='stock'
                value={editStock}
                onChange={(e) => {
                    seteditStock(e.target.value);
                }}
            />
            <input
                className='addInp editInp'
                type='text'
                placeholder='sale'
                value={editSale}
                onChange={(e) => {
                    seteditSale(e.target.value);
                }}
            />
            <Button
                colorScheme='cyan'
                onClick={() => {
                    let obj = {
                        name: editName,
                        price: editPrice,
                        stock: editStock,
                        discountPercent: editSale,
                    };

                    console.log(obj);

                    seteditName('');
                    seteditPrice(0);
                    seteditStock(0);
                    seteditSale('');

                    seteditProd(false);



                    axios.put(`https://654bcb115b38a59f28efb8ab.mockapi.io/products/${editId}`, obj)
                }}
            >
                Edit
            </Button>
        </div>
    );
}

export default EditProd;
