import * as React from "react";
import styles from "./Catalog.module.scss";
import arr from "./arrBoock";
import ModalComponent from "../ModalComponent/ModalComponent"
type MyState = {
    name: string;
};
class Catalog extends React.Component {
    constructor(props: string){
        super(props);
        this.state = {
            name: 0,
            title: "null",
            body: 0,
        }
          this.handleChange = this.handleChange.bind(this);
    }
        handleChange = (fieldName: string,showModal: number) => (e) => {
            this.state.name == 0 ? this.setState({name: 1,}) : this.setState({name: 0,});
            this.setState({title: fieldName,})
            this.setState({body: showModal,})
            
            
        };

      
      render() {
        return(
            <>
            <div className={styles.CatalogConteiner}>
                <div className={styles.catalogTitle}>
                    <h1>catalog</h1>
                </div>
                <div className={styles.catalog}>
                    <div className={styles.catalogWrapper}>
                    {arr.map((item,i) => {
                        return (
                            <div className={styles.itemBoock} onClick={this.handleChange(item.path,i)}>
                                <img src={require(`../assets/images/${item.path}`)} alt="" ></img>
                                <div className={styles.btnOrder}><p>order</p></div>
                            </div>
                        )
                    })}
                </div>
                </div>
            </div>
            <ModalComponent name={this.state.name} title={this.state.title} body={this.state.body}/>
            </>
        )
    }
}
export default Catalog;
