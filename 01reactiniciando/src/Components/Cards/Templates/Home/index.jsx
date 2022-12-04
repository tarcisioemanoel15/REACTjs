import { useEffect } from 'react';
import { useState } from 'react';

import "./style.css";

import { loadPosts } from "../../Components/loadPosts/loadPosts";
import { Posts } from '../../Components/Posts';
import { Button } from "../../Components/Button";
import { TextInput } from '../../Components/TextInput';
import { useCallback } from 'react';



export default function Home() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPrePage] = useState(10);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPrePage >= allPosts.length;

  // Para o input 
  const filteredPosts = !!searchValue ?
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
      );
    })
    :
    posts;


  const handleLoadPosts = useCallback(async (page, postsPrePage) => {
    const postsAndPhots = await loadPosts();
    setPosts(postsAndPhots.slice(page, postsPrePage));
    setAllPosts(postsAndPhots)
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPrePage);
  }, [handleLoadPosts, postsPrePage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPrePage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPrePage);
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  }

  // input
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value)
  }








  return (
    <section className='container'>
      <div className="search-container">

        {!!searchValue && (
          <>
            <h1>{searchValue}</h1>
          </>
        )}

        <TextInput
          handleChange={handleChange}
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
          onClick={loadMorePosts}
          disabled={noMorePosts}
        />
      )}

    </section>

  );

}
