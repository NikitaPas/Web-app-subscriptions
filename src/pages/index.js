import React from 'react';
import axios from '../axios';
 
const Home = () => {
  React.useEffect(() => {
    axios.get('')
  }, [])
  return (
    <div>
      <h1>Welcome to GeeksforGeeks</h1>
    </div>
  );
};
 
export default Home;