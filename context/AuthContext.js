import axios from "axios";
import { handleErrorMessage } from "helpers/helper";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    checkedLogedIn();
  }, []);

  const login = async (cellphone) => {
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        cellphone,
      });

      toast.success(res.data.message);
    } catch (error) {
      toast.error(handleErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const checkOtp = async (otp) => {
    console.log(otp);

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:3000/api/auth/checkotp", {
        otp,
      });

      setUserData(res.data.user);
      // console.log(res.data.user);
      router.push("/");

      toast.success("شما با موفقیت وارد شدید!");
    } catch (err) {
      console.log(err);
      toast.error(handleErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };
  // console.log("userData", userData);

  const checkedLogedIn = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/auth/me");

      setUserData(res.data.user);

      console.log(res.data.user);
    } catch (err) {
      toast.error(handleErrorMessage(err));
      setUserData(null);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        login,
        loading,
        setLoading,
        checkOtp,
        userData,
        checkedLogedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
