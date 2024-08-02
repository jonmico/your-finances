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
import User from './pages/user';
import Register from './pages/register';
import Login from './pages/login';
import Budgets from './pages/budgets';
import Transactions from './pages/transactions';

const PageContent = styled.div`
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: min-content 1fr;
  height: 100vh;

  @media (max-width: 600px) {
    grid-template-columns: none;
    grid-template-rows: min-content 1fr min-content;
  }

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
          <Route
            path={'/'}
            index
            element={
              <PageContent>
                <Index />
              </PageContent>
            }
          />
          <Route
            path={'register'}
            element={
              <PageContent>
                <Register />
              </PageContent>
            }
          />
          <Route
            path={'login'}
            element={
              <PageContent>
                <Login />
              </PageContent>
            }
          />
          <Route path={'app'} element={<AppLayout />}>
            <Route index element={<Navigate replace to={'home'} />} />
            <Route path={'home'} element={<Home />} />
            <Route path={'accounts'} element={<Accounts />} />
            <Route path={'budgets'} element={<Budgets />} />
            <Route path={'transactions'} element={<Transactions />} />
            <Route path={'user'} element={<User />} />
          </Route>
        </Routes>
        <Outlet />
      </BrowserRouter>
    </StyledApp>
  );
}
