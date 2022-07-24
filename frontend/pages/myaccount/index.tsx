import React from 'react'
import styles from '../../styles/header.module.css'
import Link from 'next/link'
export default function Account() {
  return (
    <>
    
<div className={styles.mainAccount}>
<p>My Account</p>
<hr />
<span>MY BEAUTY PROFILE</span><Link href='/'>Click Here</Link>
<hr />
<span>MY PRODUCT REVIEW</span><Link href='/'>Click Here</Link>
<hr />
<hr />
<p>ORDER HISTORY</p>
<br />
<ul>You haven&#39;t placed any orders yet.</ul>
<div>
  <p>ACCOUNT DETAILS</p>
  <hr />
<p>gagan</p>

</div>

<div>
  <p>India</p>
  <button>VIEW ADDRESSES</button>
</div>
</div>

    </>
  )
}
