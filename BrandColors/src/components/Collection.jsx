import { useParams } from 'react-router-dom';

const Collection = () => {
  const { slugs } = useParams();
  return <h3>Collection</h3>;
};

export default Collection;
