import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { HomeContainer, Logo, Title } from './Home.style';
import logo from 'assets/tracer_logo.png';
import tracer_mini from 'assets/tracer_mini.jpg';

const Home: React.FunctionComponent = () => (
  <HomeContainer>
    <Logo alt="tracerlogo" src={logo} />
    <Title>
      <FormattedMessage id="home.title" />
    </Title>
    <img alt="mini tracer" src={tracer_mini} />
  </HomeContainer>
);

export default Home;
