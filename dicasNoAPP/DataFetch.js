/*CSS inicio data fetch

.container{
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  background: #eee;
  padding: 30px;
}
.posts{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}
.post{
  background: #fff;
  box-shadow: 0 0 10px rgb(0, 0, 21);
  transition: transform 100ms ease-in-out;
}
.post:hover{
  transform: scale(1.05);
}
.post img{
  max-width: 100%;
}
.post-content{
  padding: 30px;
}
*/
import './App.css';
import { Component } from 'react';
class App extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    this.loadPosts();
  }
  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const pohotosResponse = fetch('https://jsonplaceholder.typicode.com/photos')
   
    const [posts, photos] = await Promise.all([postsResponse, pohotosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return {...post, cover: photosJson[index].url}
    })

    this.setState({
      // posts: postsJson
      posts: postsAndPhotos
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
        <div className="posts" >
          {posts.map(post => (
            <div className='post'>
              <img src={post.cover} alt={post.title}></img>
            <div key={post.id} className="post-content">

              <h1>{post.title}</h1>
              <p>{post.body}</p>

            </div>
            </div>

          ))}
        </div >
      </section>
    );
  }
}

export default App;
