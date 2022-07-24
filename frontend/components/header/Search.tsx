import Link from "next/link";
import React from "react";
import styles from "../../styles/header.module.css";
export default function Search({ data }: any) {
  return (
    <>
      {data.map((ele: any) => {
        return (
          <Link key={ele._id} href={`/product/${ele._id}`}>
            <div key={ele._id} className={styles.childsearch}>
              <img src={ele.image} />
              <div>
                <p>{ele.title}</p>

                <span>{`₹${ele.price}`}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
