import React from "react";
import styled from "styled-components";
import { Navbar } from "../components";
import Grid from "@mui/material/Grid";
import { Filters, ProductList, Sort, PageHero } from "../components";
const ProductsPage = () => {
  return (
    <>
    <Wrapper>
    <main className="OlderVersion">
      <Navbar />

      <Wrapper className="page">
        {/* <PageHero title='products' /> */}
        <div className="section-center products">
          <Filters />

          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
    </Wrapper>

    <Wrapper  >
      <div className="NewVersion">
      <Navbar />
      <Grid container gap={1} className="CenteringDiv">

        <Grid item xs={2}>

          <Filters />
        </Grid>
        <Grid item xs={7}>
          <Grid container gap={1} className="CenteringDiv">
            <Grid item xs={12}>
              <div>
              <Sort />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div >
              <ProductList />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>

          {/* <PageHero title='products' /> */}
        </Grid>


      </Grid>
      </div>
    </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background: "#eeeeee";
  overflow:hidden;

  .CenteringDiv {
    margin-top:5%;
    margin-bottom:5%;
    display:flex;
    justify-content: center;
  }

  .OlderVersion{
    display:none;
  }

  @media (max-width: 767px) {
    margin-bottom:5%;
    .products {
      display: flex;
      flex-direction:column;
    }
    .NewVersion{
      display:none;
    }
    .OlderVersion{
      display:unset;
    }
  }
  @media (min-width: 800px) and (max-width: 950px) {
    .products {
      display: flex;
      flex-direction:column;
    }
    .NewVersion{
      display:none;
    }
    .OlderVersion{
      display:unset;
    }
  }
`;

export default ProductsPage;
