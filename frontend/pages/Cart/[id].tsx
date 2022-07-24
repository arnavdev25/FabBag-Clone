/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React from "react";
import CartPage from "../../components/cart/CartPage";
import Header from "../../components/header/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

const cart = ({ Data }: any) => {
  // const router = useRouter();
  // console.log("Data", Data);

  // if(Data.data){
    return (
      <>
        <Header />
        <CartPage Data={Data} />
        <Footer />
      </>
    );

  // }
  // else{
    
  // router.push("/signin");
  // }

};

export const getServerSideProps = async (context: any) => {
  const data = await axios
    .get(`https://fabbag-backend.herokuapp.com/cart/getCartData/${context.query.id}`)
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return null;
      }
    })
    .catch((err) => console.log(err));

  // return {
  //   props: {
  //     Data: JSON.parse(JSON.stringify(data)),
  //   },
  // };

  return { props: { Data: { data } } };
};

export default cart;
