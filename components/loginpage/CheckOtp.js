import AuthContext from "../../context/AuthContext";
import React, { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";

const CheckOtp = () => {
  const { checkOtp, loading } = useContext(AuthContext);
  const [otp, setOtp] = useState("");

  const handleCheckOtp = async () => {
    if (otp === "") {
      toast.error(" کد تائید نمی تواند خالی باشد");
      return;
    }
    var regex = /^[0-9]{6}$/;
    let result = regex.test(otp);

    if (!result) {
      toast.error("لطفا  کد ورود  را به درستی وارد کنید!");
      return;
    }

    // toast.success("کداعتبارسنجی ارسال شد");
    await checkOtp(otp);
  };

  const changeOtpHandler = (e) => {
    setOtp(e.target.value);
  };
  return (
    <section className="loggin__wrapper">
      <div className="loggin__content loggin__content-otp">
        <h4 className="mb-4"> کد تایید را وارد کنید</h4>
        <div>
          <input
            type="text"
            className="auth-input"
            value={otp}
            onChange={changeOtpHandler}
          />
          <button
            onClick={handleCheckOtp}
            className="btn-auth btn-auth-login d-block text-center mx-auto my-3"
          >
            {loading && (
              <div className="spinner-border spinner-border-sm ms-2"></div>
            )}
            تایید
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckOtp;
