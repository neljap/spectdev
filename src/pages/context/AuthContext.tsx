import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { hosturl } from "../../utils/ApiFeatures";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token"); // => 'value'
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const getUserDetails = async () => {
      await axios
        .get(`${hosturl}/api/user/getuser`, config)
        .then((res) => {
          setData(res?.data);
        })
        .catch((err) =>  console.log(err.response.data));
    };
    getUserDetails();
  }, []);

  console.log("data from context", data);

  return (
    <AuthContext.Provider value={{ data, setData }}>
      {children}
    </AuthContext.Provider>
  );
};
