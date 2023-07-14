import React from "react";
import { Tabs } from "antd";
import Products from "./Products";
//import Bids from "../ProductInfo/BidModal.js";

function Profile() {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="My Products" key="1">
          <Products />
        </Tabs.TabPane>

        <Tabs.TabPane tab="General Profile" key="2">
          <h1>General Profile</h1>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Profile;
