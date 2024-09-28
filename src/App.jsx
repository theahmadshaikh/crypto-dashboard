import React from 'react'
import Dashboard from './Pages/Dashboard/Dashboard'
import TransactionPage from './Pages/Transaction/TransactionPage';
import Support from './Pages/Support/Support';
import { Box } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/Transaction",
      element: <TransactionPage />,
    },
    {
      path: "/Support",
      element: <Support />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
