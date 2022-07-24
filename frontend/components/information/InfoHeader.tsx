import { Breadcrumbs, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { InfoHeaderDiv } from "./formStyled";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const InfoHeader = () => {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <InfoHeaderDiv>
      <a className="logo logo--center" href="/">
        <Image
          height="60"
          width="278"
          alt="FAB BAG"
          className="logo__image logo__image--medium"
          src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO-FINAL.png?10537"
          priority={true}
        />
      </a>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          underline="none"
          key="1"
          color="inherit"
          href="/"
          // onClick={handleClick}
        >
          Cart
        </Link>
        <Typography key="2" color="text.primary">
          Information
        </Typography>
        <Typography key="3" color="text.primary">
          Shipping
        </Typography>
        <Typography key="4" color="text.primary">
          Payment
        </Typography>
      </Breadcrumbs>
    </InfoHeaderDiv>
  );
};

export default InfoHeader;
