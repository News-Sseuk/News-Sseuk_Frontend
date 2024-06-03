import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import Notfound from "./pages/Notfound";
import Article from "./pages/Article";
import MyPage from "./pages/MyPage";
import Scrap from "./pages/Scrap";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/scrap" element={<Scrap />} />
      </Routes>
    </>
  );
}

export default App;
