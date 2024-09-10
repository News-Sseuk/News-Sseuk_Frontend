import { createBrowserRouter,Outlet} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";
import Article from "./pages/Article";
import Scrap from "./pages/Scrap";
import Search from "./pages/Search";
import CategoryEdit from "./pages/CategoryEdit";
import Notification from "./components/home/Notification";
import MyPage from "./pages/MyPage";
import InfoEdit from "./pages/InfoEdit";
import MainLayout from "./components/MainLayout";

const router = createBrowserRouter([
    {
        path:"/",
        element: (
            <MainLayout>
              <Outlet />
            </MainLayout>
          ),
        children:[
            {
            path: "/home",
            element: <Home />,
          },
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/onboarding",
            element:<Onboarding />,
        },
        {
            path:"/article",
            element:<Article />,
        },
        {path:"/mypage", element:<MyPage />},
        {path:"/mypage/category",element: <CategoryEdit />},
        {path:"/mypage/notification", element: <Notification />},
        {path:"/mypageedit", element :<InfoEdit />},        {
            path:"/scrap",
            element:<Scrap />,
        },        {
            path:"/search",
            element:<Search />,
        },
        ]
    }
]);

export default router;