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
                console.log(content)
                this.setState({ posts: content, loading: false})
            })
            .catch(error => {
                console.log(error);
            })
    }
    
    async callApi(){
        const response = await fetch('http://localhost:8080/posts');
        console.log(response)
        console.log(response.json)
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