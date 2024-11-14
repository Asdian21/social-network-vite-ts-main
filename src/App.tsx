import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WrongPassword } from "./pages/WrongPassword/WrongPassword";
import { CodeEnter } from "./pages/CodeEnter/CodeEnter";
import { ForgotPasswordPage } from "./pages/PasswordPage/ForgotPasswordPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { PostPage } from "./pages/PostPage/PostPage";
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<LoginPage/>
    },
    {
      path: "/registration-page",
      element: <RegistrationPage />,
    },
    {
      path: "/wrong-password",
      element: <WrongPassword />,
    },
    {
      path: "/code-enter",
      element: <CodeEnter />,
    },
    {
      path: "/password-page",
      element: <ForgotPasswordPage />,
    },
    {
      path: "/main-page",
      element: <MainPage />,
    },
    {
      path: "/profile-page",
      element: <ProfilePage />,
    },
    {
      path:"/post/:postId",
      element:<PostPage/>
      
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
