import * as React from "react";
import styles from "./Card.module.scss";
import mostArr from "./mostArr";
import ModalComponent from "../ModalComponent/ModalComponent"
class Card extends React.Component {
    constructor(props: string) {
        super(props);
        this.state = {
            sliderItem: 0,
            img: '',
            open: 0,
            body: '',
            title: '',
            openOrder: 0,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (boockTitle: string,boockBody: string,boockImg: string) => (e) => {
        this.state.open == 0 ? this.setState({open: 1,}) : this.setState({open: 0,});
        this.setState({img: boockImg,})
        this.setState({body: boockBody,})
        this.setState({title: boockTitle,})
    };
    handleItemWindow  = (x: number) => (e: number) => {
        x != 2 ? this.setState({sliderItem: x+1}) : this.setState({sliderItem: 0});
        
    }
    updateData = (value: number) => {
        this.setState({open: value,});
        document.body.style.overflow = "visible";
    };

    render() {
        return(
            <>
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
                                        <div onClick={this.handleChange(item.title,item.body,item.path)} className={styles.btnCardOrder}><p>open</p></div>
                                    </div>
                                    <button className={styles.btnSlider} onClick={this.handleItemWindow(index)}>next</button>
                                </div>
                            )
                            }
                        })}
                    </div>
                </div>
            </div>
            <ModalComponent updateData ={this.updateData} openOrder = {this.state.openOrder} open={this.state.open} img={this.state.img} body={this.state.body} title={this.state.title}/>
             </>
        )
    }
}

export default Card;
