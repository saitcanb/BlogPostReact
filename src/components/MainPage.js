import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
class MainPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MainContent/>
                <Footer/>
            </div>
        );
    }
}

export default MainPage;
