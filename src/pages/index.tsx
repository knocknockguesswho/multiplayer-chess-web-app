import React from 'react';
import { useRouter } from 'next/dist/client/router';

const Home = () => {
  const router = useRouter();
  const roomId = '12345';
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div
        onClick={() => router.push({ pathname: '/game/' + roomId })}
        className='text-white text-3xl bg-blue-500 p-4 hover:bg-opacity-75 cursor-pointer rounded-lg'
      >
        Go to chess room
      </div>
    </div>
  );
};

export default Home;
