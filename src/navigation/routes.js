import Home from "../screens/home";
import SignIn from "../screens/signIn";
import SignUp from "../screens/signUp";
import Quiz from "../screens/quiz";
import Profile from "../screens/profile";

export const privateRoutes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/quizpage",
    component: Quiz
  },
  {
    path: "/profile",
    component: Profile
  },
];

export const publicRoutes = [
  {
    path: "/signup",
    component: SignUp
  },
  {
    path: "/signin",
    component: SignIn
  },
];
