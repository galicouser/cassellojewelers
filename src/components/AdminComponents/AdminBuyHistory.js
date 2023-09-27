import styled from "styled-components";
import BuyHistoryTable from "./BuyHistoryTable";
const AdminBuyingHistory = () => {

    return (
        <Wrapper>
            <p className="TitleText">Edit Products</p>
            <div className="CardsDisplay">
                <BuyHistoryTable />
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
margin-top:4.5%;
background-color: #f9f9f9;

font-family: "Century Gothic", sans-serif;
.TitleText{
    font-size: 45px;
    font-weight: 100;
    color: #1c1f25;
    margin-left:5%;
    text-align:left;
}
.CardsDisplay{
    padding-left:105px;
    margin-top:4%;
}
@media (max-width: 767px) {
   
    
    .TitleText{
        font-size:50px;
        color: #1c1f25;
        padding:0px;
        padding-left:0px;
        text-align:center;
    } 
    .CardsDisplay{
        padding-left:0px;
    }
}
@media (max-width: 850px) {

    width:100%;
    padding-right: 0%;
    margin-top:15%;
    .CardsDisplay{
        padding-left:10px;
        margin-top:4%;
    }
  }
`
export default AdminBuyingHistory;