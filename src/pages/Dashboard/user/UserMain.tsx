import Sidebar from "../Sidebar";
import { Route, Routes } from "react-router-dom";
import {
  UserHome,
  UserKyc,
  UserRefferals,
  UserSupport,
  UserWallet,
  UserKycVerify,
  UserDeposit,
  UserPayDataInfo,
  UserWithdraw,
  UserWdFunds,
  UserWdSuccess,
  UserPayProof
} from "./pages";
import SettingProfile from "./pages/settings/components/SettingProfile";
import { SettingKyc, SettingsPpics, SettingsPwd } from "./pages/settings/components";

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
        <Route path="/payment/proof" element={<UserPayProof />} />
        <Route path="kyc-data" element={<UserKycVerify />} />
        <Route path="support" element={<UserSupport />} />
        <Route path="settings/main" element={<SettingProfile />} />
        <Route path="settings/picture" element={<SettingsPpics/>} />
        <Route path="settings/password" element={<SettingsPwd />} />
        <Route path="settings/kyc" element={<SettingKyc/>} />
        <Route path="refferals" element={<UserRefferals />} />
      </Routes>
    </Sidebar>
  );
};

export default UserMain;
