import { Component } from 'react';
import "./style.css";

import { loadPosts } from "./Components/loadPosts/loadPosts";
import { Posts } from './Components/Posts';
class ApiClass extends Component {

  state = {
    posts: []
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhots = await loadPosts();
    this.setState({ posts: postsAndPhots });

  }



  render() {
    const { posts } = this.state;

    return (

      <section className='container'>
        <Posts posts={posts} />
      </section>

    );
  }
}

export default ApiClass;