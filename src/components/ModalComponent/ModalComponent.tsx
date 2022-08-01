import * as React from "react";
import ReactDOM from 'react-dom/client';
import styles from "./ModalComponent.module.scss"

export default class ModalComponent extends React.Component {
    constructor(props: number){
        super(props);

    }
       

    render() {
        if(this.props.name != 0) {
            return(
                <div className={styles.mainModal}>{this.props.name} +  {this.props.title} + {this.props.body}</div>
            )
        }
        
    }

}