import { NavLink } from "react-router-dom";

const Settingsmain = ({children}: any) => {

  const SettingsLink = [
    {
      id: 1,
      link: "/user/settings/main",
      text: "Main Settings"
    },
    {
      id: 3,
      link: "/user/settings/password",
      text: "Update Password"
    },
    {
      id: 4,
      link: "/user/settings/kyc",
      text: "KYC Verification"
    }
  ]

  const activeLink = "border border-b-primary pb-2"
  const normalLink = ""

  return (
    <div>
        <div>
          <div className="flex flex-col gap-4 justify-center items-center pt-4">
            <h2 className="md:text-4xl text-2xl font-[600] text-center">Settings</h2>
            <p className="text-md font-[500] text-center">Manage your account settings and Preferences</p>
          </div>
            <div className="py-4 shadow-lg flex flex-col justify-center item-center">
              <div className="mx-auto flex flex-row gap-4">
              {SettingsLink.map(item => (
                <NavLink to={item.link} key={item.id} className={({isActive}) => (isActive ? activeLink : normalLink)}>{item.text}</NavLink>
              ))}
            </div>
            <div>{children}</div>
            </div> 
            
        </div>
        
    </div>
  )
}

export default Settingsmain;