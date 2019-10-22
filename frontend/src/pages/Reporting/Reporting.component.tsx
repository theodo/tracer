import * as React from 'react';
import { useParams } from 'react-router-dom';

const Home: React.FunctionComponent = () => {
  const { projectId } = useParams();
  return <div>Hello from project {projectId}</div>;
};

export default Home;
