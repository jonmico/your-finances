import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import styled from 'styled-components';
import AppLayout from './components/app-layout';
import GlobalNav from './components/global-nav';
import Index from './pages';
import Home from './pages/home';
import Accounts from './pages/accounts';
import Stocks from './pages/stocks';
import User from './pages/user';

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: min-content 1fr;
  height: 100vh;
  min-width: 650px;

  @media (min-width: 1000px) {
    grid-template-columns: 20% 1fr;
  }

  @media (min-width: 1600px) {
    grid-template-columns: 320px 1fr;
  }
`;

export default function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <GlobalNav />
        <Routes>
          <Route path={'/'} index element={<Index />} />
          <Route path={'app'} element={<AppLayout />}>
            <Route index element={<Navigate replace to={'home'} />} />
            <Route path={'home'} element={<Home />} />
            <Route path={'accounts'} element={<Accounts />} />
            <Route path={'stocks'} element={<Stocks />} />
            <Route path={'user'} element={<User />} />
          </Route>
        </Routes>
        <Outlet />
      </BrowserRouter>
    </StyledApp>
  );
}
