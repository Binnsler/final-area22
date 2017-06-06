import React from "react";;
import Header from "../components/blocks/header";
import Footer from "../components/blocks/footer";

const App = () => (
  <div>
    <Header/>
    <div className="main-body">
      { this.props.children }
    </div>
    <Footer/>
  </div>
)

export default App;
