import styles from './Group.module.css';

function GroupOne() {
    return (
        <div className={styles.rectangleParent}>
          <img className={styles.groupChild} alt="" src="../images/groupone/Rectangle 23.png" />
          <div className={styles.groupItem} />

          <a href="/products">
      <img
      className={styles.groupInner}
      alt=""
      src="../images/groupone/Rectangle 4.png"
      />
      </a>


          
          <div className={styles.kisspngBulletComputerIconsParent}>
            <img
              className={styles.kisspngBulletComputerIcons2}
              alt=""
              src="../images/groupone/kisspng-bullet-computer-icons-arrow-next-button-5ac96c339039e9 2.png"
            />
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <div className={styles.frameChild} />
            <img
              className={styles.kisspngBulletComputerIcons3}
              alt=""
              src="../images/groupone/kisspng-bullet-computer-icons-arrow-next-button-5ac96c339039e9 3.png"
            />
          </div>
        </div>
      );
    }

export default GroupOne;
