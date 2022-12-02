import { Component } from 'react';
import "./style.css";

import { loadPosts } from "../../Components/loadPosts/loadPosts";
import { Posts } from '../../Components/Posts';
import { Button } from "../../Components/Button";

class Home extends Component {

  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPrePage: 90
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPrePage } = this.state;
    const postsAndPhots = await loadPosts();
    this.setState({
      posts: postsAndPhots.slice(page, postsPrePage),
      allPosts: postsAndPhots,
    });
  }

  loadMorePosts = () => {

    const {
      page,
      postsPrePage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postsPrePage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPrePage);
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });

    // console.log(page, postsPrePage, nextPage, nextPage + postsPrePage);

  }


  render() {
    const { posts, page, postsPrePage, allPosts } = this.state;
    const noMorePosts = page + postsPrePage >= allPosts.length;

    return (
      <section className='container'>
        <Posts posts={posts} />

        <Button
          text={'Load More Posts'}
          onClick={this.loadMorePosts}
          disabled={noMorePosts}
        />

      </section>

    );
  }
}

export default Home;