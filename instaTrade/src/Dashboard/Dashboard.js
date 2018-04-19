import React from "react";
import "./Dashboard.css";
import Header from "../Header/Header";
import Loading from "../common/Loading";

class Dashboard extends React.Component{

    constructor(){
        super();
        this.state = {
            loading: true,
            posts: ''
        }
    }

    componentWillMount(){
        this.setState({ loading: true });
        this.callApi()
            .then(content => {
                this.setState({ posts: content, loading: false})
                console.log("content received");
            })
    }
    
    async callApi(){
        const response = await fetch('http://localhost:8080/dashboard');
        return await response.json();
    }

    render(){
        if (this.state.loading){
            return(
                <div className="loading-div">
                    <Loading />
                </div>
            );
        }
        return(
            <div>
            <Header />
                <div className="topmargin">
                    {this.state.posts[0].content}
                </div>
            </div>
        );
    }
}

export default Dashboard;