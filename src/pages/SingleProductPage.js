import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import { Navbar } from "../components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";

import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";


const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    console.log(url + id);
  }, [id]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;
  return (
    <Wrapper>
      <Navbar />
      <div className="section section-center page">
        <Link to="/products">
          <Button variant="text">
            <p className="ButtonText">Back to Products</p>
          </Button>
        </Link>
        <div className="product-center">
          <ProductImages images={product.image} />
          <section className="content">
            <p className="NameTag">{name}</p>
            {/* <Stars stars={stars} reviews={reviews} /> */}
            <h5 className="price">{formatPrice(85000)}</h5>
            <p className="desc">{description}</p>
            {/* <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p> */}
            <p className="info">
              <span>SKU :</span>
              {sku}
            </p>
            <hr />
            <AddToCart product={product} />
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: #eeeeee;
  font-family: "Century Gothic", sans-serif;


  .NameTag{
    font-size:25px;
    font-weight:100;
    text-transform: capitalize;

  }

  .product-center {
    display: grid;
    gap: 4rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    height:50px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  .btn {
    width: 250px;
    text-align: center;
    background-color: none;
  }
  .ButtonText {
    font-size: 18px;
    font-weight: 100;
    text-align: center;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
  @media (max-width: 767px) {
    margin-top:50px;
    
    .product-center {
      display:flex;
      flex-direction:column;
      justify-content:evenly;
    }
    .NameTag{
      margin-top:45%;
    }
    .content{
      margin-top:10%;
    }

  }
  @media (min-width: 800px) and (max-width: 950px) {
    margin-top:10%;
  }
`;

export default SingleProductPage;
