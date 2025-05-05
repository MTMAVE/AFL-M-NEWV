import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col transform-gpu">
      <Suspense fallback={
        <div className="h-20 w-full bg-white/80 backdrop-blur-sm fixed top-0 left-0 z-50 animate-pulse" />
      }>
        <Header />
      </Suspense>
      
      <main className="flex-grow relative transform-gpu backface-hidden">
        <Suspense fallback={
          <div className="w-full h-screen flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
          </div>
        }>
          <Outlet />
        </Suspense>
      </main>

      <Suspense fallback={
        <div className="h-96 w-full bg-gray-100 animate-pulse" />
      }>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Layout;