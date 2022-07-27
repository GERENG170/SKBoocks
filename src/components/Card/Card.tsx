import * as React from "react";
import styles from "./Card.module.scss";

function Card() {
    return(
        <div className={styles.cardConteiner}>
            <div className={styles.card}>
                <div className={styles.cardAbout}>
                    <h1>SKBoocks</h1>
                    <p>online store of the best books of the great writer Stephen King. Order any book from the catalog and we will quickly call you back and deliver</p>
                </div>
                <div className={styles.cardBoock}>
                    <div className={styles.imgBoockBlock}>
                        <img src={require('../assets/images/it.jpg')} alt="" />
                    </div>
                    <div className={styles.infoBoockBlock}>
                        <h1>IT</h1>
                        <p className={styles.starsCard}>4.8/5</p>
                        <p className={styles.infoCard}>It is a horror novel by American writer Stephen King first published in 1986 by Viking Press. As a result of penetration, important topics for growing up arise: power, the power of memory of the united group, the impact of childhood trauma on growing up life.</p>
                        <div className={styles.btnCardOrder}><p>order</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
