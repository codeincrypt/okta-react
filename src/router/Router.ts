import Login from "../auth/Login"
import LoginCallback from "../auth/LoginCallback"
import Logout from "../auth/Logout"
import Dashboard from "../pages/Dashboard"
import Profile from "../pages/Profile"

export const MainRouter = [
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/login/callback",
    exact: true,
    component: LoginCallback,
  },
  {
    path: "/session",
    exact: true,
    component: Logout,
  },
]

export const SecureRouter = [
  {
    path: "/",
    exact: true,
    component: Dashboard,
  },
  {
    path: "/profile",
    exact: true,
    component: Profile,
  },
  {
    path: "/dashboard",
    exact: true,
    component: Dashboard,
  }
]
