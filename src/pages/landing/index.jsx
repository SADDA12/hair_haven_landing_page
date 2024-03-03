import React from "react";
import Header from "../../components/header";
import Hero from "../../components/hero";
import Collection from "../../components/collections";
import Products from "../../components/products";
import Ceosection from "../../components/ceo";

export default function Landing() {
    return (
      <React.Fragment>
        <Header/>
        <Hero/>
        <Collection/>
        <Products/>
        <Ceosection/>

        
      </React.Fragment>
    );
        
  }