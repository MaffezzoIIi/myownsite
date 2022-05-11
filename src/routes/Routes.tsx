import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

const Home = React.lazy(() => import('../home/Home'));

const Calculator = React.lazy(
  () => import('../apps/calculator/Calculator')
);

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/apps/calculator" element={<Calculator />} />
    </Switch>
  );
};

export default Routes;
