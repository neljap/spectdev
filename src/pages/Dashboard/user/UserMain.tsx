import Sidebar from "../Sidebar";
import { Route, Routes } from "react-router-dom";
import {
  UserHome,
  UserKyc,
  UserRefferals,
  UserSettings,
  UserSupport,
  UserWallet,
  UserKycVerify,
  UserDeposit,
  UserPayDataInfo,
  UserWithdraw,
  UserWdFunds,
  UserWdSuccess
} from "./pages";

const UserMain = () => {
  return (
    <Sidebar>
      <Routes>
        <Route path="home" element={<UserHome />} />
        <Route path="wallet" element={<UserWallet />} />
        <Route path="kyc" element={<UserKyc />} />
        <Route path="withdraw" element={<UserWithdraw />} />
        <Route path="withdraw-funds" element={<UserWdFunds />} />
        <Route path="withdraw-success" element={<UserWdSuccess />} />
        <Route path="deposit" element={<UserDeposit />} />
        <Route path="payment/:wallet/:amount" element={<UserPayDataInfo />} />
        <Route path="kyc-data" element={<UserKycVerify />} />
        <Route path="support" element={<UserSupport />} />
        <Route path="settings" element={<UserSettings />} />
        <Route path="refferals" element={<UserRefferals />} />
      </Routes>
    </Sidebar>
  );
};

export default UserMain;
