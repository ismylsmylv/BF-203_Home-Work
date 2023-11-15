import { useState, useEffect } from 'react'
import './App.css'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import axios, { isCancel, AxiosError } from 'axios';


function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [searchRes, setSearchRes] = useState([])
  useEffect(() => {
    axios("https://654bcb115b38a59f28efb8ab.mockapi.io/prods").then(res => {
      console.log(res.data)
      setData(res.data)
    })
  }, [])

  return (
    <div className='wrapper'>
      {/* buttons */}
      {/* <Button colorScheme='blue'>Button</Button> */}

      <Input placeholder='Search' onChange={(e) => {
        // console.log(e.target.value)
        setSearch(e.target.value)
        data.filter(elem => {
          if (elem.name == search) {
            setSearchRes(elem)
          }
          else {
            console.log("isnt")
          }
        })
      }} />
      {/* table */}
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
          <Tbody>
            {
              data.map(elem => {

                if (elem.unitsInStock < 20) {

                  return <Tr bg={"red"} key={elem.id} >
                    <Td>{elem.id}</Td>
                    <Td>{elem.name}</Td>
                    <Td>{elem.price}</Td>
                    <Td>{elem.discontinued}</Td>
                    <Td>{elem.unitsInStock}</Td>
                    <Td> <Button colorScheme='blue'>Edit</Button></Td>
                    <Td> <Button colorScheme='red'>Delete</Button></Td>
                  </Tr>
                }
                else {
                  return <Tr bg={"white"} key={elem.id} >
                    <Td>{elem.id}</Td>
                    <Td>{elem.name}</Td>
                    <Td>{elem.price}</Td>
                    <Td>{elem.discontinued}</Td>
                    <Td>{elem.unitsInStock}</Td>
                    <Td> <Button colorScheme='blue'>Edit</Button></Td>
                    <Td> <Button colorScheme='red'>Delete</Button></Td>
                  </Tr>
                }
              })
            }
          </Tbody>
        </Table>
      </TableContainer>
    </div >
  )
}

export default App
