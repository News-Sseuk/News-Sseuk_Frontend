import axios from "axios";

const baseURL =
  "http://newssseuk-dev-env.eba-h62kudm8.ap-northeast-2.elasticbeanstalk.com";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 처리에서 401 에러가 발생하면 RefreshToken으로 AccessToken 갱신
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const accessToken = {
        accessToken: localStorage.getItem("accessToken"),
      };
      if (accessToken) {
        try {
          const { data } = await axiosInstance.post(`/user/refresh`, {
            accessToken,
          });
          localStorage.setItem("accessToken", data.result.accessToken); // 새로운 accessToken 저장
          axiosInstance.defaults.headers[
            "Authorization"
          ] = `Bearer ${data.result.accessToken}`;
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${data.result.accessToken}`;
          return axiosInstance(originalRequest); // 실패한 요청 재시도
        } catch (refreshError) {
          console.log("토큰 갱신 실패:", refreshError);
          throw refreshError;
        }
      }
    }
    return Promise.reject(error);
  }
);

// interface EmailValidResponse {
//   code: string;
//   message: string;
//   result: boolean;
//   isSuccess: boolean;
// }

// 이메일 유효성 검사
export const fetchEmailValidCheck = async (email: string) => {
  try {
    const response = await axiosInstance.get(`/user/email/${email}`);
    return {
      code: response.data.code,
      message: response.data.message,
      result: response.data.result,
      isSuccess: response.data.isSuccess,
    };
  } catch (err: any) {
    handleApiError(err);
  }
};

// 로그인 요청 (토큰 저장)
export const fetchSignIn = async (loginInfo) => {
  try {
    const response = await axiosInstance.post("/user/signin", loginInfo);
    if (response.data.isSuccess) {
      // 로그인 성공 시 토큰 저장
      localStorage.setItem("accessToken", response.data.result.accessToken);
    }
    return response.data;
  } catch (err) {
    handleApiError(err);
  }
};

// 회원가입 요청
export const fetchSignUp = async (loginInfo) => {
  try {
    const response = await axiosInstance.post("/user/signup", loginInfo);
    if (response.data.isSuccess) {
      localStorage.setItem("accessToken", response.data.result.accessToken);
    }
    return response.data.isSuccess;
  } catch (err) {
    handleApiError(err);
  }
};

// 공통 에러 핸들러 함수
const handleApiError = (err: any) => {
  if (err.response && err.response.status === 401) {
    throw new Error("Unauthorized");
  } else if (err.response && err.response.status === 403) {
    throw new Error("Forbidden");
  } else {
    console.error("API 호출 중 오류 발생:", err);
    throw err;
  }
};

//로그아웃
export const fetchSignOut = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await axiosInstance.post("/user/signout", accessToken);
    return response.data.isSuccess;
  } catch (err) {
    handleApiError(err);
  }
};

//검색창 하단 - 지금 뜨는 뉴쓱 키워드

export const fetchTrendingKeyWords = async () => {
  try {
    const result = await axiosInstance.get("/trending/keywords");
    if (result.data.isSuccess) {
      return result.data.result;
    }
  } catch (err) {
    handleApiError(err);
  }
};

//검색 결과
export const fetchSearch = async () => {
  try {
    const result = await axiosInstance.patch("/search/");
    return result;
  } catch (err) {
    handleApiError(err);
  }
};

//온보딩
// 카테고리 선택 후 login화면으로 navigate

export const fetchOnboardingCategory = async (selectedCategories) => {
  try {
    const body = { preferCategory: selectedCategories };
    const result = await axiosInstance.patch("/mypage/category", body);
    return result.data;
  } catch (err) {
    handleApiError(err);
  }
};

//마이페이지 정보 불러오기
export const fetchUserInfo = async () => {
  try {
    const response = await axiosInstance.get(`/mypage`);
    if (response.data.isSuccess) {
      return response.data;
    }
  } catch (err: any) {
    handleApiError(err);
  }
};

//홈 api
export const fetchUserPrefers = async () => {
  try {
    const response = await axiosInstance.get("/myPrefers");
    return {
      code: response.data.code,
      message: response.data.message,
      result: response.data.result,
      isSuccess: response.data.isSuccess,
    };
  } catch (err: any) {
    handleApiError(err);
  }
};

export type FetchCategoryArticleParams = {
  category: string;
  cursortime: string;
};

// 카테고리별 기사 불러오기
export const fetchCategoryArticle = async ({
  category,
  cursortime,
}: FetchCategoryArticleParams) => {
  try {
    const response = await axiosInstance.get(
      `/article/${encodeURIComponent(category)}/${cursortime}`
    );
    console.log("at api", category);
    return {
      code: response.data.code,
      message: response.data.message,
      result: response.data.result,
      isSuccess: response.data.isSuccess,
    };
  } catch (err: any) {
    handleApiError(err);
  }
};
