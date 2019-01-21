import React, {Component} from 'react';
import Content from "./Content";
import CommentForm from "./CommentForm";
import SingleComment from "./SingleComment";
import SidebarColumn from "./SidebarColumn";

class MainContent extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <Content/>
                            <CommentForm/>
                            <SingleComment/>
                        </div>
                        <div className="col-lg-4">
                            <SidebarColumn/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContent;
