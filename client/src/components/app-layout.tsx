import { Outlet } from 'react-router-dom';
import AppNav from './app-nav';

export default function AppLayout() {
  return (
    <>
      <AppNav />
      <Outlet />
    </>
  );
}
