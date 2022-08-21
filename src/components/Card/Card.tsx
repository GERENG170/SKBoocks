import * as React from "react";
import styles from "./Card.module.scss";
import mostArr from "./mostArr";
class Card extends React.Component {
    constructor(props: string) {
        super(props);
        this.state = {
            sliderItem: 0,
        }
    }

    handleItemWindow  = (x: number) => (e: number) => {
        x != 2 ? this.setState({sliderItem: x+1}) : this.setState({sliderItem: 0});
        
    }

    render() {
        return(
            <div className={styles.cardConteiner}>
                <div className={styles.card}>
                    <div className={styles.cardAbout}>
                        <h1>SKBoocks</h1>
                        <p>online store of the best books of the great writer Stephen King. Order any book from the catalog and we will quickly call you back and deliver</p>
                    </div>
                    <div className={styles.wrapperCards}>
                        {mostArr.map((item, index) => {
                            if(this.state.sliderItem == index){
                            return (
                                <div className={styles.cardBoock} id={index}>
                                    <div className={styles.imgBoockBlock}>
                                        <img src={require(`../assets/images/${item.path}`)} alt="" />
                                    </div>
                                    <div className={styles.infoBoockBlock}>
                                        <h1>{item.title}</h1>
                                        <p className={styles.starsCard}>{item.star}</p>
                                        <p className={styles.infoCard}>{item.body}</p>
                                        <div className={styles.btnCardOrder}><p>order</p></div>
                                    </div>
                                    <button className={styles.btnSlider} onClick={this.handleItemWindow(index)}>next</button>
                                </div>
                            )
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
