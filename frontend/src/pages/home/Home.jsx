import React, { Suspense, lazy } from 'react';

const Sidebar = lazy(() => import('../../components/sidebar/Sidebar'));
const MessageContainer = lazy(() => import('../../components/messages/MessageContainer'));

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <MessageContainer />
      </Suspense>
    </div>
  );
}

export default Home;
