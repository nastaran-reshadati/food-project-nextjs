import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-xs-12 col-s-12 col-md-4 col-lg-4 col-xl-4">
          <ul className="list-group ">
            <li className="list-group-item list-group-item-dark py-3">
              اطلاعات کاربر
            </li>
            <li className="list-group-item list-group-item-dark py-3">آدرس ها</li>
            <li className="list-group-item list-group-item-dark py-3">سفارشات</li>
            <li className="list-group-item list-group-item-dark py-3 ">
              تراکنش ها
            </li>
            <li className="list-group-item list-group-item-dark py-3">خروج</li>
          </ul>
        </div>
        <div className="col-xs-12 col-s-12 col-md-8 col-lg-8 col-xl-8 p-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
