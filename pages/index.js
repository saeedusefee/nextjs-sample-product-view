import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../@behtarino/components/PageComponents/PageLoader';

const SamplePage = dynamic(() => import('../modules/Pages/SamplePage'), {
  loading: () => <PageLoader />,
});

const HomePage = () => {
  return <SamplePage />;
};

export default HomePage;
