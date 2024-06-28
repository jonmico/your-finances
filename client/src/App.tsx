import styled from 'styled-components';
import GlobalNav from './components/global-nav';

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

export default function App() {
  return (
    <StyledApp>
      <GlobalNav />
    </StyledApp>
  );
}
