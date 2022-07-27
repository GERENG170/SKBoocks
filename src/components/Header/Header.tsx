import * as React from "react";
// @ts-ignore
import styles from "./Header.module.scss";

function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.headerConteiner}>
                <div className={styles.iconBlock}>
                    <h1>SKBooks</h1>
                </div>
                <div className={styles.menuBlock}>
                    <div className={styles.btnCatalog}>
                        <div className={styles.btnCatalogConteiner}><p>catalog</p></div>
                        
                    </div>
                    <div className={styles.btnContacts}>
                        <p>contacts</p>
                    </div>
                    <div className={styles.btnAbout}>
                        <p>about</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;