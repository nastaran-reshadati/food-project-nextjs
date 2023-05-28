import Layout from "@/components/profile/Layout";
import React from "react";
import axios from "axios";
import useSWR, { SWRConfig } from "swr";
import { GetDatas } from "repository/AxiosRepository";
import { toast } from "react-toastify";
import Loading from "@/components/profile/Loading";
const profile = () => {

  const { data, error } = useSWR("http://localhost:8000/api/menu");

  if (error) {
    toast.error("ارور");
  }
  if (!data) {
    console.log('loadddding');
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }
  return (
    <div>
      <Layout>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-s-12 col-md-6">
                <label className="mx-2" htmlFor="name">
                  نام و نام خانوادگی
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-control mt-1"
                  placeholder="نام و نام خانوادگی"
                />
              </div>
              <div className="col-xs-12 col-s-12 col-md-6">
                <label className="mx-2" htmlFor="email">
                  ایمیل
                </label>
                <input
                  id="email"
                  type="text"
                  className="form-control mt-1"
                  placeholder=" ایمیل"
                />
              </div>
              <div className="col-xs-12 col-s-12 col-md-6 my-3">
                <label className="mx-2" htmlFor="call">
                  شماره تماس
                </label>
                <input
                  id="call"
                  type="text"
                  className="form-control mt-1"
                  placeholder="شماره تماس"
                />
              </div>
              <button className="btn-profile">ویرایش</button>
            </div>
          </div>
      </Layout>
    </div>
  );
};

export default profile;
