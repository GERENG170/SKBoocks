import * as React from "react";
import ReactDOM from 'react-dom/client';
import styles from "./ModalComponent.module.scss"

export default class ModalComponent extends React.Component {
    constructor(props: string){
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNumChange = this.handleNumChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.state = {
            on: 1,
            order: 0,
            number: "",
            personName: "",
        }
    }
    handleClose = () => (e) => {
        this.props.updateData(0);
        this.props.updateOpenOrder(0);
        this.setState({order: 0});
        this.setState({number: ""});
        this.setState({personName: ""});
    }
    handleOrder = () => (e) => {
        this.setState({order: 1});
    }
    handleCloseOrder = () => (e) => {
        this.setState({order: 0});
        this.props.updateOpenOrder(0);
    }
    handleSubmit(e) {
        alert(`number: ${this.state.number} + ${this.state.personName}`)
        this.setState({number: ""});
        this.setState({personName: ""});
        e.preventDefault();
    }
    handleNumChange(e) {
        this.setState({number: e.target.value})
    }
    handleNameChange(e) {
        this.setState({personName: e.target.value})
    }
    
    render() {
        const txtOrForm = this.state.order == 0 && this.props.openOrder == 0 ? <div className={styles.mainBody}>{this.props.body}</div> : 
        <div className={styles.mainBody}>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.number} onChange={this.handleNumChange} placeholder="enter your number"/>
                <input type="text" value={this.state.personName} onChange={this.handleNameChange} placeholder="enter your name"/>
                <button type="submit"  >send</button>
            </form> 
        </div>;
        const orderOrClose = this.state.order === 0 && this.props.openOrder == 0 ? <button className={styles.orderBtnCard} onClick={this.handleOrder()}>order</button> :
            <button className={styles.closeOrderBtnCard} onClick={this.handleCloseOrder()}>close order</button>;
        if(this.props.open != 0){
            document.body.style.overflow = "hidden";
            return( 
                <div className={styles.modal}>
                    <div className={styles.modalCard}>
                        <div className={styles.imgWrapper}>
                            <img src={require(`../assets/images/${this.props.img}`)} alt="" ></img>
                        </div>
                        <div className={styles.infoWrapper}>
                            <button onClick={this.handleClose()} className={styles.btn}>close</button>
                            <div className={styles.mainTitle}>{this.props.title}</div>
                            {txtOrForm}
                            {orderOrClose}
                        </div>
                    </div>
                </div>
            )
        }
    }
}
