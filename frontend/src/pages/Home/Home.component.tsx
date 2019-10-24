import * as React from 'react';
import { HomeContainer, Logo, Title } from './Home.style';
import logo from 'assets/tracer_logo.png';
import tracer_mini from 'assets/tracer_mini.jpg';

const Home: React.FunctionComponent = () => (
  <HomeContainer>
    <Logo alt="tracerlogo" src={logo} />
    <Title>Welcome to Tracer, are rou ready to make your CI go faster ?</Title>
    <img alt="mini tracer image" src={tracer_mini} />
  </HomeContainer>
);

export default Home;
