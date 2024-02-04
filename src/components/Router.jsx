import App from '../App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile, { ErrorPage } from './router/Profile';
import Userlist, {User} from './router/Userlist';
import NavigateEle from './router/Navigate';

const Router = () => {
    const router = createBrowserRouter([
        {
          path : "/",
          element : <App />,
          errorElement: <ErrorPage />,
        }, 
        {
          path: "profile/:name",
          element : <Profile/>
        },
        {
          path: "navigate",
          element : <NavigateEle/>
        },
        // {
        //   path : "/profile",
        //   element : <Profile/>,
        //   children : [
        //     {index : true, element : <DefaultProfile/>},
        //     {path : "spinach", element : <Spinach/>},
        //     {path : "popeye", element : <Popeye/>}
        //   ]
        // }
      ])

      return <RouterProvider router={router} />
}

const UserRouter = () => {
    const router = createBrowserRouter([
        { path : '/' , element : <App/> },
        { path : '/userlist/' , element : <Userlist/> },
        { path : '/userlist/:id' , element : <Userlist/> },
    ]);

    return <RouterProvider router={router} />
}
export {UserRouter}


export default Router