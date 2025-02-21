import { useState } from 'react';

function LikeCounter() {
  const [likes, setLikes] = useState(0);
  const [unlikes, setUnlikes] = useState(0);

  const handleUnlike = () => {
    if (likes > 0) {
      setLikes(l => l - 1);
      setUnlikes(u => u + 1);
    }
  };

  const handleClear = () => {
    setLikes(0);
    setUnlikes(0);
  };

  return (
    <div className="like-container">
      <h1>Like</h1>
      <h2>Likes {likes}</h2>
      
      <ul>
        <li>
          <strong>
            <button onClick={handleUnlike}>UnLike</button>
          </strong>
        </li>
        <li>
          <strong>UnLikes {unlikes}</strong>
        </li>
        <li>
          <strong>
            <button onClick={handleClear}>Clear All</button>
          </strong>
        </li>
      </ul>

      <hr />
      

    </div>
  );
}

export default LikeCounter;