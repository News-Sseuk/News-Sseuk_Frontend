import CategoryEdit from "../pages/mypage/CategoryEdit";
import Notification from "../components/home/Notification";
import MyPage from "../pages/mypage/MyPage";
import InfoEdit from "../pages/mypage/InfoEdit";

const myPageRoutes = [
  {
    path: "/mypage",
    element: <MyPage />,
    children: [
      { path: "category", element: <CategoryEdit /> },
      { path: "notification", element: <Notification /> },
      { path: "edit", element: <InfoEdit /> },
    ],
  },
];

export default myPageRoutes;
