import { removeFcm } from "@/services/notification/post/post";
import axios from "axios";

// Set config defaults when creating the instance
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

axios.defaults.withCredentials = true;
export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

// Change request data/error here
axiosInstance.interceptors.request.use(
  (config: any) => {
    let token;
    if (typeof window !== "undefined") {
      token = localStorage.getItem("accessToken");
    }

    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token ? token : ""}`,
      "Cache-Control": "no-cache",
    };

    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    console.log(error, "the error");

    return Promise.reject(error);
  },
);

const kickout = async () => {
  if (typeof window !== "undefined") {
    try {
      const user = localStorage.getItem("userData") ?? "";
      const authStore = localStorage.getItem("auth-store") ?? "";
      await removeFcm({
        id: JSON.parse(user)?._id,
        body: {
          fcmToken: JSON.parse(authStore)?.state?.fcm,
        },
      }).then(() => {
        localStorage.clear();
      });
    } catch (error) {
      localStorage.clear();
    }
  }

  if (
    window.location.pathname !== "/" &&
    window.location.pathname !== "/login/"
  ) {
    window.location.href = "/login/";
  }
};

axiosInstance.interceptors.response.use(undefined, async (error) => {
  const originalReq = error.config;
  if (error?.response?.status === 401) {
    try {
      const headers = {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      };
      const refreshUrl = baseURL + "auth/refreshToken";
      await axios
        .post(refreshUrl, {}, { headers, withCredentials: true })
        .then((res) => {
          localStorage.setItem("accessToken", res.data.meta.access);
        });
      return await axiosInstance(originalReq);
    } catch (error) {
      kickout();
    }
  }

  return Promise.reject(error);
});
