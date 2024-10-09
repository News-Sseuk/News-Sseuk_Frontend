import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Onboarding from "./pages/auth/Onboarding";
import Article from "./pages/Article";
import Scrap from "./pages/scrap/Scrap";
import Search from "./pages/search/Search";
import CategoryEdit from "./pages/mypage/CategoryEdit";
import Notification from "./components/home/Notification";
import MyPage from "./pages/mypage/MyPage";
import MainLayout from "./components/MainLayout";
import InfoEdit from "./pages/mypage/InfoEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "/article",
        element: <Article />,
      },
      { path: "/mypage", element: <MyPage /> },
      { path: "/mypage/category", element: <CategoryEdit /> },
      { path: "/mypage/notification", element: <Notification /> },
      { path: "/mypage/edit", element: <InfoEdit /> },
      {
        path: "/scrap",
        element: <Scrap />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

export default router;