import styled from 'styled-components';
import GlobalNav from './components/global-nav';
import AppNav from './components/app-nav';

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: min-content 1fr;
  height: 100vh;
`;

export default function App() {
  return (
    <StyledApp>
      <GlobalNav />
      <AppNav />
    </StyledApp>
  );
}
