import CategoryEdit from "../pages/CategoryEdit";
import Notification from "../components/home/Notification";
import InfoEdit from "../pages/InfoEdit";
import MyPage from "../pages/MyPage";


const myPageRoutes =[
    {
        path:"/mypage",
        element:<MyPage />,
        children:[
            {path:"category",element: <CategoryEdit />},
            {path:"notification", element: <Notification />},
            {path:"edit", element :<InfoEdit />},
        ],
    },
];

export default myPageRoutes;