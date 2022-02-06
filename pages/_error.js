import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../@behtarino/components/PageComponents/PageLoader';

const Custom500 = dynamic(() => import('../modules/Pages/500'), {
  loading: () => <PageLoader />,
});

const Custom500Page = () => <Custom500 />;

export default Custom500Page;
