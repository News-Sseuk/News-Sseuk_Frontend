import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import Notfound from "./pages/Notfound";
import Article from "./pages/Article";
import MyPage from "./pages/MyPage";
import Scrap from "./pages/Scrap";
import Search from "./pages/Search";
import CategoryEdit from "./pages/CategoryEdit";
import NotificationEdit from "./pages/NotificationEdit";
import InfoEdit from "./pages/InfoEdit";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/article" element={<Article />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/scrap" element={<Scrap />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypage/category" element={<CategoryEdit />} />
        <Route path="/mypage/notification" element={<NotificationEdit />} />
        <Route path="/mypage/edit" element={<InfoEdit />} />
      </Routes>
    </>
  );
}

export default App;
