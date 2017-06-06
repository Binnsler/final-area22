import React from "react";;
import Header from "../components/blocks/header";
import Footer from "../components/blocks/footer";

const App = ( props ) => (
  <div>
    <Header/>
    <div className="main-body">
      { props.children }
    </div>
    <Footer/>
  </div>
)

export default App;
