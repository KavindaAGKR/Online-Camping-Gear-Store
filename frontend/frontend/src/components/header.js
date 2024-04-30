import styles from './Header.module.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerChild} />
      <div className={styles.campfireArmory}>CAMPFIRE ARMORY</div>
      <img
        className={styles.vecteezyCampFireLogoVectorIcon}
        alt=""
        src="../images/header/vecteezy_camp-fire-logo-vector-design_7607623 1.png"
      />
      <div className={styles.homeParent}>

      <a href="/" className={`${styles.home} ${styles.customButton}`}>Home</a>
    <a href="/products" className={`${styles.home} ${styles.customButton}`}>Products</a>
    <a href="/About" className={`${styles.home} ${styles.customButton}`}>About</a>
    <a href="/account" className={`${styles.home} ${styles.customButton}`}>Account</a>

      </div>

     
      

<div className={styles.signInWrapper}>
      <Link to="/Login" className={styles.signIn}>
        Sign In
      </Link>
    </div>




      <div className={styles.groupParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.searchWrapper}>
            <div className={styles.search}>Search...</div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
        </div>
      </div>
      
      <a href="/cart">
      <img
      className={styles.cartShoppingYellowIcon1}
      alt=""
      src="../images/header/10536_cart_shopping_yellow_icon 1.png"
      />
      </a>
      <img
            className={styles.searchicon}
            alt=""
            src="../images/header/kisspng-search-engine-optimization-web-search-engine-busin-5adba24acebd43 1.png"
          />
    </div>
  );
}

export default Header;
