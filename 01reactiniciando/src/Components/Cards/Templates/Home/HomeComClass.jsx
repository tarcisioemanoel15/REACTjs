import { Component } from 'react';
import "./style.css";

import { loadPosts } from "../../Components/loadPosts/loadPosts";
import { Posts } from '../../Components/Posts';
import { Button } from "../../Components/Button";
import { TextInput } from '../../Components/TextInput';

class Home extends Component {

  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPrePage: 10,

    // Para o Input
    searchValue: ''
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


  // input
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  }


  render() {
    const { posts, page, postsPrePage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPrePage >= allPosts.length;

    // Para o input 
    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {

        return post.title.toLowerCase().includes(
          searchValue.toLowerCase()
        )

      })
      :
      posts;


    return (
      <section className='container'>
        <div className="search-container">

          {!!searchValue && (
            <>
              <h1>{searchValue}</h1>
            </>
          )}

          <TextInput
            handleChange={this.handleChange}
            value={searchValue}
          />

        </div>


        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (

          <p>Não existem posts :( </p>

        )}



        {!searchValue && (
          <Button
            text={'Load More Posts'}
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />
        )}

      </section>

    );
  }
}

export default Home;