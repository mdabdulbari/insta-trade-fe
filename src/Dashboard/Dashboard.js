import React from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import Loading from '../common/Loading';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      posts: '',
    };
  }

  componentWillMount() {
    this.setState({ loading: true });
    this.callApi()
      .then((content) => {
        this.setState({ posts: content, loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  callApi = () => {
    const response = fetch('http://localhost:8080/posts');
    console.log(response);
    console.log(response.json);
    return response.json();
  }

  render() {
    const { loading, posts } = this.state;
    if (loading) {
      return (
        <div className="loading-div">
          <Loading />
        </div>
      );
    }
    return (
      <div>
        <Header />
        <div className="topmargin">
          {posts[0].content}
        </div>
      </div>
    );
  }
}

export default Dashboard;
