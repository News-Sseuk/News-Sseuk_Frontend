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

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 500 &&
      error.response.data?.code === "TOKEN4002" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        // Refresh 토큰 요청
        const expiredAccessToken = localStorage.getItem("accessToken");
        const request = { accessToken: expiredAccessToken };
        const response = await axiosInstance.post("/user/refresh", request);

        if (response.data.isSuccess) {
          // 새로운 AccessToken 저장
          localStorage.setItem("accessToken", response.data.result.accessToken);

          // Axios 헤더 업데이트
          axiosInstance.defaults.headers[
            "Authorization"
          ] = `Bearer ${response.data.result.accessToken}`;
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${response.data.result.accessToken}`;

          // 실패한 요청 재시도
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        // 갱신 실패 처리
        console.error("토큰 갱신 실패:", refreshError);
        localStorage.removeItem("accessToken"); // 실패 시 토큰 삭제
        window.location.href = "/"; // 로그인 페이지로 리다이렉트
        return Promise.reject(refreshError);
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
  } catch (err) {
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
const handleApiError = (err) => {
  if (err.response && err.response.status === 401) {
    throw new Error("Unauthorized");
  } else if (err.response && err.response.status === 403) {
    throw new Error("Forbidden");
  } else throw err;
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
      return result.data;
    }
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
  } catch (err) {
    handleApiError(err);
  }
};

//홈 api
//사용자의 관심 카테고리 가져오는 api
export const fetchUserPrefers = async () => {
  try {
    const response = await axiosInstance.get("/myPrefers");
    return {
      code: response.data.code,
      message: response.data.message,
      result: response.data.result,
      isSuccess: response.data.isSuccess,
    };
  } catch (err) {
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
    if (response.data.isSuccess) {
      return response.data.result;
    }
  } catch (err) {
    handleApiError(err);
  }
};

export interface searchApiInterface {
  keyword: string;
  onOff: string;
  sort: string;
  cursorTime: string;
}

//검색
export const fetchSearch = async (props: searchApiInterface) => {
  try {
    const response = await axiosInstance.post(
      `/search/${props.keyword}/${props.onOff}/${props.sort}/${props.cursorTime}`
    );
    if (response.data.isSuccess) {
      return response.data.result;
    }
  } catch (err) {
    handleApiError(err);
  }
};

//기록기반  (검색 페이지)
export const fetchRecordRecommend = async () => {
  try {
    const response = await axiosInstance.get(`/api/recommending`);
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    handleApiError(err);
  }
};

//내용기반 추천 (개별기사 하단부)
export const fetchContentRecommend = async (id: string) => {
  try {
    const response = await axiosInstance.get(
      `/api/personalrecommend/find/${id}`
    );
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    handleApiError(err);
  }
};

// 개인정보 수정 (/mypage/edit)

export const updateUserInfo = async (name: string) => {
  try {
    const response = await axiosInstance.patch(`mypage/name`, name);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

//카테고리 수정 (/mypage/category)

interface UpdateCategory {
  preferCategory: string[];
}

export const updateCategory = async (categoryList: UpdateCategory) => {
  try {
    const response = await axiosInstance.patch(`mypage/category`, categoryList);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

//개별기사 불러오기
export const fetchArticle = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/redis/article/${id}`);
    if (response.data.isSuccess) {
      return response.data.result;
    }
  } catch (err) {
    handleApiError(err);
  }
};

interface reportProps {
  articleId: string;
  reason: string;
}

//신고하기
export const fetchReport = async (props: reportProps) => {
  try {
    const body = { reason: props.reason };
    const response = await axiosInstance.post(
      `/report/${props.articleId}`,
      body
    );
    if (response.status === 200) return true;
    else false;
  } catch (err) {
    handleApiError(err);
  }
};

//개별 기사 스크랩
export const postScrap = async (articleId: string) => {
  try {
    const response = await axiosInstance.post(`/scrap/${articleId}`);
    if (response.data.isSuccess) {
      return true;
    }
  } catch (err) {
    handleApiError(err);
  }
};

// 마이페이지 - 기사 기록 10개
export const getHistory = async () => {
  try {
    const response = await axiosInstance.get("/history");
    if (response.data.isSuccess) {
      return response.data;
    }
  } catch (err) {
    handleApiError(err);
  }
};

//스크랩 - 사용자가 스크랩한 기사의 카테고리 get해오는 api

export const getScrappedCategories = async () => {
  try {
    const response = await axiosInstance.get("/scrap/categories");
    if (response.data.isSuccess) {
      return response.data.result;
    }
  } catch (err) {
    handleApiError(err);
  }
};

//스크랩 - 카테고리별 스크랩 기사 리스트 get 해오는 api

export const getScrappedArticles = async (category: string) => {
  try {
    const response = await axiosInstance.get(`scrap/`, {
      params: { category: category },
    });
    if (response.data.isSuccess) {
      return response.data.result;
    }
  } catch (err) {
    handleApiError(err);
  }
};
