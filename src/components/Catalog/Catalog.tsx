import * as React from "react";
import styles from "./Catalog.module.scss";
import arr from "./arrBoock";
import ModalComponent from "../ModalComponent/ModalComponent"

class Catalog extends React.Component {
    constructor(props: string){
        super(props);
        this.state = {
            open: 0,
            img: "null",
            body: 0,
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
        handleChangeOrder = (boockTitle: string,boockBody: string,boockImg: string) => (e) => {
            this.state.open == 0 ? this.setState({open: 1,}) : this.setState({open: 0,});
            this.setState({img: boockImg,})
            this.setState({body: boockBody,})
            this.setState({title: boockTitle,})
            this.setState({openOrder: 1,})
            
        }
        updateData = (value: number) => {
            this.setState({open: value,});
            document.body.style.overflow = "visible";
        };
        updateOpenOrder = (value: number) => {
            this.setState({openOrder: value,});
        }
        handleAnimateOn =() => (e) => {

            
        }

      
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
                            <div className={styles.itemBoock} onMouseOver={this.handleAnimateOn()}>
                                <div className={styles.imgCatalogItem}  onClick={this.handleChange(item.title,item.body,item.path)}>
                                    <img src={require(`../assets/images/${item.path}`)} alt="" ></img>
                                </div>
                                <div onClick={this.handleChangeOrder(item.title,item.body,item.path)} className={styles.btnOrder}><p>order</p></div>
                            </div>
                        )
                    })}
                </div>
                </div>
            </div>
            <ModalComponent updateOpenOrder={this.updateOpenOrder} updateData ={this.updateData} openOrder = {this.state.openOrder} open={this.state.open} img={this.state.img} body={this.state.body} title={this.state.title}/>
            </>
        )
    }
}
export default Catalog;
