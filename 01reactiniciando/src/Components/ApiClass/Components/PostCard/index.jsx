export const PostCard = ({ cover, title, body }) => (
  <div className="post">

    <img src={cover} alt={title} />

    <div className="post-content">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>

  </div>
);