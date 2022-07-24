import styled from "styled-components";

export const CartPageStyled = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  min-height: 450px;

  .cartDiv {
    padding-top: 50px;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 768px) {
      width: 750px;
    }
    @media (min-width: 992px) {
      width: 970px;
    }
    @media (min-width: 1200px) {
      width: 1170px;
    }

    .heading {
      > h1 {
        color: #161616;
        font-size: 30px;
        font-weight: 400;
        text-transform: capitalize;
        line-height: normal;
        margin: 0 0 40px;
        outline: none;
        text-align: left;
      }
    }

    .cartDetails {
      display: flex;

      > .cartProdutsList {
        position: relative;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
        line-height: 22px;
        font-size: 14px;
        color: #333;
        @media (min-width: 992px) {
          width: 66.66666667%;
        }

        > table {
          border-spacing: 0;
          border-collapse: collapse;
          width: 100%;
          font-weight: 400;

          > thead > tr {
            > th {
              font-size: 14px;
              font-weight: 700;
              text-transform: uppercase;
              color: #333;
              text-align: left;
              border-bottom: 1px solid #dfe4e6;
              padding: 20px;
            }

            > .image {
              padding-left: 0;
            }
          }

          > tbody > tr > td {
            padding: 20px 0;
            text-align: left;
            border-bottom: 1px solid #dfe4e6;

            > .item-quantity {
              width: 66px;
              line-height: 1.35;
              height: 36px;
              text-align: center;
              border: 1px solid #cbcbcb;
              color: #333;
              text-align: center;
              padding: 0;

              ::-webkit-outer-spin-button,
              ::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }

              /* Firefox */
              -moz-appearance: textfield;

              :focus {
                border: 1px #e5b95f solid !important;
                outline: #e5b95f;
              }
            }

            .lang1 {
              transition: all 0.5s;
              font-size: 14px;
              line-height: 22px;
              font-weight: 400;
              text-transform: capitalize;
              letter-spacing: 0;
              cursor: pointer;

              :hover {
                color: #e5b95f;
              }
            }
          }
        }
      }

      > .cartButtons {
        background: #f7f7f7;
        position: relative;
        min-height: 1px;
        padding-right: 15px;
        height: fit-content;
        padding-left: 15px;

        @media (min-width: 992px) {
          width: 33.33333333%;
        }

        > .summery {
          display: flex;
          justify-content: space-between;

          > p {
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            color: #333;
            text-align: left;
            margin: 20px 0 10px;
          }
        }

        .btns {
          display: flex;
          flex-direction: column;

          > button {
            padding: 0 25px;
            text-transform: uppercase;
            line-height: 34px;
            height: 36px;
            letter-spacing: 0.05em;
            font-weight: 700;
            color: #333;
            border: 1px solid #333333;
            text-decoration: none;
            background-color: #fff;
          }

          > button:nth-child(1) {
            background: #343434;
            border-color: #343434;
            transition: all 0.6s ease 0s;
            display: block;
            border: 1px solid;
            width: 100%;
            margin-bottom: 20px;
            height: 45px;
            color: #fff;
            font-weight: 400;
            border-radius: 4px;
            cursor: pointer;

            :hover {
              background: #e5b95f;
              border-color: #e5b95f;
            }
          }

          > button:nth-child(2) {
            display: block;
            border: 1px solid;
            width: 100%;
            margin-bottom: 20px;
            height: 45px;
            color: #fff;
            font-weight: 400;
            border-radius: 4px;
            background: #e5b95f !important;
            border-color: #e5b95f !important;
            cursor: pointer;
            transition: all 0.6s ease 0s;

            :hover {
              background: #252525 !important;
              border-color: #252525 !important;
            }
          }
        }
      }
    }
  }
`;
