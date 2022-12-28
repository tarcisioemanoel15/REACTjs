import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import "./style.css";
export const Posts = () => {

  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();
  return (
    <div>
      <h1>POSTS {`para: ${id}`} {`qs: ${qs.get('segundo')}`} </h1>
      <Outlet />
    </div>
  )
}