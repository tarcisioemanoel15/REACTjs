import './App.css';
import { Component } from 'react';

class App extends Component { 
   state = {

      counter:0,
      posts: [
        { 
          id: 1,
          title: "Titulo 1",
          body: "corpo 1" 
        },

        { 
          id: 2,
          title: "Titulo 2",
          body: "corpo 2"
        },

        { 
          id: 3,
          title: "Titulo 3",
          body: "corpo 3" 
        },

      ]

    };
    timeoutUpdate = null;

    componentDidMount(){
      this.handeleTimeAut();
    }

    componentDidUpdate(){
      // clearTimeout(this.timeoutUpdate);
      this.handeleTimeAut();

    }

    componentWillUnmount(){
      clearTimeout(this.timeoutUpdate);

    }
    
handeleTimeAut=()=>{
  const { posts, counter } = this.state;

    posts[0].title = 'O Titulo Mudou';


    this.timeoutUpdate = setTimeout(()=>{
      this.setState({ posts, counter: counter + 1 })
    },10000);
  
}

    render() {
    const { posts, counter } = this.state;

    return (
      <div className="App" >

        {<h1>{counter}</h1>}
          {posts.map(post => (
            <div key={post.id}>          
            <h1>{post.body}</h1>
            <p>{post.title}</p>
            </div>
          ) )}
      </div >
    );
  }
}

export default App;
