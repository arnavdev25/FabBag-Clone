import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import FormComp from "./FormComp";
import { InformationPageDiv, FormDiv } from "./formStyled";
import InfoHeader from "./InfoHeader";
import Promo from "./promo";

const InformationPage = () => {
  return (
    <InformationPageDiv>
      <div>
        <div className="main">
          <InfoHeader />
          <FormComp />
        </div>

        <div className="sidebar">
          <Promo />
        </div>
      </div>
    </InformationPageDiv>
  );
};

export default InformationPage;
