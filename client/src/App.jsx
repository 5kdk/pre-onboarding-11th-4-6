import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { Root, Main } from './pages/';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Main />,
      },
    ],
  },
]);

const App = () => (
  <MantineProvider
    theme={{
      fontFamily: 'Spoqa Han Sans Neo, sans-serif',
      globalStyles: () => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
        body: {
          margin: 0,
          padding: 0,
        },
        primaryColor: '#007BE9',
      }),
    }}>
    <RouterProvider router={router} />
  </MantineProvider>
);

export default App;
