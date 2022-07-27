import * as React from "react";
import styles from "./Catalog.module.scss";
import arr from "./arrBoock";
function Catalog() {

    return(
        <div className={styles.CatalogConteiner}>
            <div className={styles.catalogTitle}>
                <h1>catalog</h1>
            </div>
            <div className={styles.catalog}>
                <div className={styles.catalogWrapper}>
                {arr.map((item) => {
                    return (
                        <div className={styles.itemBoock}>
                            <img src={require(`../assets/images/${item.path}`)} alt="" ></img>
                            <div className={styles.btnOrder}><p>order</p></div>
                        </div>
                    )
                })}
            </div>
            </div>
        </div>
    )
}

export default Catalog;