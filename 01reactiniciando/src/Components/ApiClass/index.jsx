import { Component } from 'react';
import "./style.css";


class ApiClass extends Component {

  state = {
    posts: []
  };

  componentDidMount() {
    this.loadPosts();
  }


  loadPosts = async () => {

    const postsResponse = fetch('https://jsonplaceholder.typicode.com/photos');
    const photsResponse = fetch('https://jsonplaceholder.typicode.com/photos');


    const [posts, phots] = await Promise.all([postsResponse, photsResponse]);

    const postsJson = await posts.json();
    const photsJson = await phots.json();

    const postsAndPhots = postsJson.map((post, index) => {
      return { ...post, cover: photsJson[index].url }
    });


    this.setState({ posts: postsAndPhots });

  }




  render() {
    const { posts } = this.state;

    return (
      <section className='container'>

        <div className="posts">

          {posts.map(post => (
            <div className="post">

              <img src={post.cover} alt={post.title} />

              <div key={post.id} className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default ApiClass;