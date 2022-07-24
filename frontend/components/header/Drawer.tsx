import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import List from "@mui/material/List";
import { BiSearch } from "react-icons/bi";
import { VscClose } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import styles from "../../styles/header.module.css";
import Search from "./Search";
import axios from "axios";
import { useState } from "react";
import { Rings } from "react-loader-spinner";
type Anchor = "top";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });
  const [data, setData] = useState([]);
  const [searchdata, setSearchData] = useState(true);
  const [styl, setStyle] = useState("beforeSearch");
  const searchProduct = (e: any) => {
    const value = e.target.value;
    axios
      .get(`https://fabbag-backend.herokuapp.com/search?title=${value}`)
      .then((res) => {
        if (res.status == 200) {
          setData(res.data);
          setSearchData(true);
        }
      })
      .catch((err) => {
        if (err) {
          setData([]);
          setSearchData(false);
          setStyle("aftersearch");
        }
      });
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
      setData([]);
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" ? "auto" : 250, height: "300px" }}
      role="presentation"
    >
      <List>
        <div className={styles.drawerMain1}>
          <p>What are you loocking for?</p>
          <span onClick={toggleDrawer(anchor, false)}>
            <VscClose />
          </span>
        </div>
        <div className={styles.drawerMain2}>
          <div className={styles.drawerMain3}>
            <input
              type="text"
              placeholder="search product"
              onChange={(e) => searchProduct(e)}
              className={styles.searchinput}
            />
            {/* <Search/> */}
            <span>
              <FiSearch />
            </span>
            {/* <span><Rings color="black"/></span> */}
          </div>
        </div>
        <div className={styles.searchproduct}>
          {searchdata == true ? (
            <Search data={data} />
          ) : (
            <div className={styl}>
              <p>No results</p>
            </div>
          )}

        </div>
      </List>
    </Box>
  );

  return (
    <>
      {(["top"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <span onClick={toggleDrawer(anchor, true)}>{<BiSearch />}</span>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, true)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </>
  );
}
