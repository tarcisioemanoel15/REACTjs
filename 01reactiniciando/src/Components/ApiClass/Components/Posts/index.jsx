import { PostCard } from "../PostCard";

// const { posts } = this.state;


export const Posts = ({ posts }) => (

  <div className="posts">
    {posts.map(post => (

      <PostCard
        key={post.id}
        title={post.title}
        cover={post.cover}
        body={post.body}
      />
    ))}

  </div>
);