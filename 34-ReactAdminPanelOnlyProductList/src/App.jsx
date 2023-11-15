import { useState, useEffect } from 'react';
import './App.css';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [searchRes, setSearchRes] = useState([]);

  useEffect(() => {
    axios('https://654bcb115b38a59f28efb8ab.mockapi.io/prods').then((res) => {
      setData(res.data);
      console.log(res.data)
    });
  }, []);

  const addSearch = (e) => {
    const searchItem = e.target.value;
    setSearch(searchItem);

    if (searchItem) {
      const results = data.filter((elem) =>
        elem.name.toLowerCase().includes(searchItem.toLowerCase())
      );
      setSearchRes(results);
      console.log(results)
    } else {
      setSearchRes([]);
    }
  };

  const addRow = (items) => {
    return items.map((elem) => (
      <Tr bg={elem.unitsInStock < 20 ? 'red' : 'white'} key={elem.id}>
        <Td>{elem.id}</Td>
        <Td>{elem.name}</Td>
        <Td>{elem.price}</Td>
        <Td>{elem.discontinued}</Td>
        <Td>{elem.unitsInStock}</Td>
        <Td>
          <Button colorScheme='blue'>Edit</Button>
        </Td>
        <Td>
          <Button colorScheme='red' name={elem.id} onClick={(e) => {
            e.preventDefault()
            console.log(e.target.getAttribute("name"))
            axios.delete("https://654bcb115b38a59f28efb8ab.mockapi.io/prods/" + e.target.getAttribute("name"))
            setData(data.filter((elem) => {
              return elem.id != e.target.getAttribute("name")
            }))
          }}>Delete</Button>
        </Td>
      </Tr>
    ));
  };

  return (
    <div className='wrapper'>
      <Input placeholder='Search' onChange={addSearch} />

      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Discontinued</Th>
              <Th>unitsInStock</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>{addRow(search ? searchRes : data)}</Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
