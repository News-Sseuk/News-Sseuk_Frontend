import axios from "axios";

const baseURL =
  "http://newssseuk-dev-env.eba-h62kudm8.ap-northeast-2.elasticbeanstalk.com/";

// 이메일 중복 확인 : /user/email/{email}

interface EmailValidResponse {
  result: boolean;
}

export const fetchEmailValidCheck = async (
  email: string
): Promise<EmailValidResponse> => {
  try {
    const response = await axios.get(`${baseURL}/user/email/${email}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const validInfo: EmailValidResponse = {
      result: response.data.result,
    };

    return validInfo;
  } catch (err: any) {
    if (err.response && err.response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      console.log("버그당", err);
      throw err;
    }
  }
};

// user/signup
export const fetchLogin = async (email) => {
  try {
    const response = await axios.post(`${baseURL}/user/signup`, loginInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const userInfo = {
      userid: response.data.user.userid,
      nickname: response.data.user.nickname,
      mbti: response.data.user.MBTI_FK,
    };
    return userInfo;
  } catch (err) {
    if (err.response && err.response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      console.log("버그당", err);
      throw err;
    }
  }
};
