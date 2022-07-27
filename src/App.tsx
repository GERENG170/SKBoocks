import * as React from "react";
import ReactDOM from 'react-dom/client';
import styles from "./App.module.scss"
import HomePage from "./pages/HomePage";
const App = () => {
   return(
    <>
    <div className={styles.mainWrapper}>
      <div className={styles.mainConteiner}>
         <HomePage/>
      </div>
    </div>
    
    </>
   )
}
export default App;
// root.render(<App/>);
