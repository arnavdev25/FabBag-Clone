import styled from "styled-components";

export const CartMenuStyled = styled.div`
  height: 100%;
  display: flex !important;
  flex-direction: column !important;

  .continue-shoping {
    background: #000;
    height: 90px;
    line-height: 90px;
    width: 100%;
    padding: 0 15px;
    color: white;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > span {
      float: left;
      font-size: 18px;
      text-transform: uppercase;
      color: #fff;
    }

    > a {
      cursor: pointer;
      display: flex;

      > svg {
        transform: rotate(298deg);
        transform: rotate(0);
        transition: transform 0.3s ease;
        font-size: 2rem;
        :hover {
          color: #e5b95f;
          transform: rotate(90deg);
        }
      }
    }
  }

  .cart-list {
    overflow-y: scroll;
    padding: 15px;
    height: fit-content;
    min-height: 82vh;
    

    > .item {
      list-style: none;
      display: flex;
      gap: 10px;
      justify-content: space-between;

      > div {
        font-size: 16px;

        > .product-name {
          margin-top: 0;
          width: 240px;

          > a {
            color: #222222;
            transition: all 0.5s;

            :hover {
              color: #e5b95f;
            }
          }
        }

        > div {
          display: flex;
          gap: 10px;

          > .qty-cart {
            color: #999;
          }
        }
      }

      > a:nth-child(1) {
        width: 40%;
      }

      > a {
        > svg {
          font-size: 15px;
          transform: rotate(298deg);
          transform: rotate(0);
          transition: transform 0.3s ease;
          :hover {
            color: #e5b95f;
            transform: rotate(90deg);
          }
        }
      }
    }
  }

  .wrap-btcart {
    position: absolute;
    bottom: 3px;
    display: block;
    width: 100%;
    padding: 0;
    background: #fff;

    > .summary {
      box-sizing: border-box;

      > .total {
        width: 100%;
        display: flex;
        border-bottom: 1px solid #eaeaea;
        border-top: 1px solid #eaeaea;
        padding: 15px;
        margin: 0 0 10px;
        justify-content: space-between;

        > span {
          color: #000;
          font-size: 20px;
          font-weight: 600;
          float: left;
          line-height: 100%;
          padding: 0;
          margin: 0;
        }

        > span:nth-child(2) {
          color: #e5b95f !important;
        }
      }
    }

    .actions {
      .view-cart > a {
        border-width: 1px;
        display: block;
        font-size: 14px;
        height: 50px;
        line-height: 50px;
        font-weight: 400;
        padding: 0 15px;
        text-transform: uppercase;
        letter-spacing: 1px;
        border: 2px solid;
        text-align: center;
      }

      .btn {
        background-color: #e5b95f !important;
        color: #252525 !important;
        border-color: #e5b95f !important;
        border-width: 2px;
        border-style: solid;
        text-transform: uppercase;
        font-size: 14px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        width: 100%;
        margin-top: 10px;
        letter-spacing: 1px;
        transition: all 0.25s;
        cursor: pointer;

        :hover {
          background-color: #252525 !important;
          color: #ffffff !important;
          border-color: #252525 !important;
        }
      }
    }
  }
`;
