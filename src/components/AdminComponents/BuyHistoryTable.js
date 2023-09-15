import styled from "styled-components";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BuyHistoryTable = () => {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "black",
      color: "white",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
         
  }));
  
  function createData(name, calories, fat, carbs, protein,deliveryStatus) {
    return { name, calories, fat, carbs, protein, deliveryStatus };
  }
  
  const rows = [
    createData('https://res.cloudinary.com/dwyqdiqds/image/upload/v1693325644/cassello%20jewelers/Cassello%20Jeweler/5E1C32A8-E954-44C9-8102-21324AF0BD3B_rflv9n.jpg', 159,"@demousername","12 Jul 2019", "SomeCode","Delivered"),
    createData('https://res.cloudinary.com/dwyqdiqds/image/upload/v1693325644/cassello%20jewelers/Cassello%20Jeweler/5E1C32A8-E954-44C9-8102-21324AF0BD3B_rflv9n.jpg', 159,"@demousername","12 Jul 2019", "SomeCode","Un-Delivered"),
    createData('https://res.cloudinary.com/dwyqdiqds/image/upload/v1693325644/cassello%20jewelers/Cassello%20Jeweler/5E1C32A8-E954-44C9-8102-21324AF0BD3B_rflv9n.jpg', 159,"@demousername","12 Jul 2019", "SomeCode","Delivered"),
    createData('https://res.cloudinary.com/dwyqdiqds/image/upload/v1693325644/cassello%20jewelers/Cassello%20Jeweler/5E1C32A8-E954-44C9-8102-21324AF0BD3B_rflv9n.jpg', 159,"@demousername","12 Jul 2019", "SomeCode","Un-Delivered"),
    createData('https://res.cloudinary.com/dwyqdiqds/image/upload/v1693325644/cassello%20jewelers/Cassello%20Jeweler/5E1C32A8-E954-44C9-8102-21324AF0BD3B_rflv9n.jpg', 159,"@demousername","12 Jul 2019", "SomeCode","Delivered"),
    createData('https://res.cloudinary.com/dwyqdiqds/image/upload/v1693325644/cassello%20jewelers/Cassello%20Jeweler/5E1C32A8-E954-44C9-8102-21324AF0BD3B_rflv9n.jpg', 159,"@demousername","12 Jul 2019", "SomeCode","Delivered"),
    createData('https://res.cloudinary.com/dwyqdiqds/image/upload/v1693325644/cassello%20jewelers/Cassello%20Jeweler/5E1C32A8-E954-44C9-8102-21324AF0BD3B_rflv9n.jpg', 159,"@demousername","12 Jul 2019", "SomeCode","Un-Delivered"),
    createData('https://res.cloudinary.com/dwyqdiqds/image/upload/v1693325644/cassello%20jewelers/Cassello%20Jeweler/5E1C32A8-E954-44C9-8102-21324AF0BD3B_rflv9n.jpg', 159,"@demousername","12 Jul 2019", "SomeCode","Delivered"),
    createData('https://res.cloudinary.com/dwyqdiqds/image/upload/v1693325644/cassello%20jewelers/Cassello%20Jeweler/5E1C32A8-E954-44C9-8102-21324AF0BD3B_rflv9n.jpg', 159,"@demousername","12 Jul 2019", "SomeCode","Un-Delivered"),
    createData('https://res.cloudinary.com/dwyqdiqds/image/upload/v1693325644/cassello%20jewelers/Cassello%20Jeweler/5E1C32A8-E954-44C9-8102-21324AF0BD3B_rflv9n.jpg', 159,"@demousername","12 Jul 2019", "SomeCode","Delivered"),
  ];
 
  return (
    <Wrapper>
      
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Image</StyledTableCell>
            <StyledTableCell align="right">Cost</StyledTableCell>
            <StyledTableCell align="right">Username</StyledTableCell>
            <StyledTableCell align="right">Purchase Date</StyledTableCell>
            <StyledTableCell align="right">SKU</StyledTableCell>
            <StyledTableCell align="right">Delivery Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name} >
              <StyledTableCell component="th" scope="row">
                
                <img src={row.name} className="Image"/>
              </StyledTableCell>
              <StyledTableCell align="right">${row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.deliveryStatus}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Wrapper>
  );
};
const Wrapper = styled.section`

font-family: "Century Gothic", sans-serif;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content:space-evenly;
  align-content: center;
  padding-right: 5%;
  width:100%;
  padding-bottom:5%;

  .Image{
    width:100px;
    height:100px;
    border-radius:50%;
    object-fit:cover;
  }


  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100%;
    padding-right: 2.5%;
  }
  
  
  @media (min-width: 800px) and (max-width: 1400px){
    width:660;
    padding-right: 0%;
  }

`;
export default BuyHistoryTable;
