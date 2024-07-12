import styled from 'styled-components';
import GlobalNav from './components/global-nav';
import AppNav from './components/app-nav';

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-rows: min-content 1fr;
  height: 100vh;

  @media (min-width: 1600px) {
    grid-template-columns: 320px 1fr;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 240px 1fr;
  }

  @media (max-width: 1000px) {
    grid-template-columns: min-content 1fr;
  }
`;

export default function App() {
  return (
    <StyledApp>
      <GlobalNav />
      <AppNav />
    </StyledApp>
  );
}
