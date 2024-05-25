import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Collection from './pages/Collection';
import Subcollection from './pages/Subcollection';
import Video from './pages/Video';

function Layout() {
  return (
      <>
        <Header />
        <Outlet />
      </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [  
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/collection',
        element: <Collection/>
      },
      {
        path: '/subcollection',
        element: <Subcollection/>
      },
      {
        path: '/video',
        element: <Video/>
      }
    ]
  }
])

function App() {
  return (
   <>
    
      <RouterProvider router={router}/>

   </>
  );
}

export default App;
