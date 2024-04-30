import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <img className={styles.rectangleIcon} alt="" src="../images/Footer/rectangle.png" />
      <div className={styles.facebook}>
        All Camping Equipments In One Place
      </div>
      <div className={styles.followUsFacebookContainer}>
        <li className={styles.followUs}>Follow US</li>
        <ul className={styles.facebookInstagramWhatsapp}>
          <li className={styles.facebook}>Facebook</li>
          <li className={styles.facebook}>Instagram</li>
          <li>WhatsApp</li>
        </ul>
      </div>
      <div className={styles.usefulLinksNadunContainer}>
        
        <ul className={styles.facebookInstagramWhatsapp}>
        <li className={styles.facebook}>Useful Links</li>
          <li className={styles.facebook}>Nadun Tours</li>
          <li className={styles.facebook}>RentCAR.kl</li>
          <li className={styles.facebook}>Our Location</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className={styles.campfireArmory}>CAMPFIRE ARMORY</div>
      <img
        className={styles.vecteezyCampFireLogoVectorIcon}
        alt=""
        src="../images/Footer/vecteezy_camp-fire-logo-vector-design_7607623 1.png"
      />
      <div className={styles.copyright2023CampfireContainer}>
        <span>{`© Copyright 2023 `}</span>
        <span className={styles.campfireArmory1}>CAMPFIRE ARMORY</span>
        <span> All Rights Reserved.</span>
      </div>
      <div className={styles.x7ServiceContactContainer}>
        <li className={styles.followUs}>24X7 Service</li>
        <li className={styles.followUs}>Contact US +94123456</li>
      </div>
    </div>
  );
}

export default Footer;
