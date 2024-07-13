import { Outlet } from 'react-router-dom';
import AppNav from './app-nav';
import styled from 'styled-components';

const OutletContainer = styled.div`
  padding: 0.5rem 1rem;
`;

export default function AppLayout() {
  return (
    <>
      <AppNav />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </>
  );
}
