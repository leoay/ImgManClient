import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';

const LazyComponent = React.lazy(() => import('./Lazy'));

const Spinner = () => <div>i am Spinner...</div>;

const Gallary: React.FC = () => {
  return (
    <PageContainer>
      <React.Suspense fallback={<Spinner />}>
          <LazyComponent />
      </React.Suspense>
    </PageContainer>
  );
};

export default Gallary;
