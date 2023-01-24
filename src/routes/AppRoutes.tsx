import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import { AppRouteComponent } from './AppRouteComponent';
import { Routes } from './config';

import { TxBuy } from '../pages/TxBuy';

export const routesConfig: RouteObject[] = [
  {
    path: Routes.App,
    element: <AppRouteComponent />,
    children: [
      {
        path: Routes.App,
        element: <TxBuy />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={Routes.App} replace />,
  },
];
