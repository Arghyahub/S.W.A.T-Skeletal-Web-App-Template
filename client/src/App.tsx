import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";

import "./App.css"
import Home from "./pages/Home";
import Auth from "./pages/Auth";

const LinkBtns = () => {
  return (
      <div className="flex w-full justify-center gap-4">
          <Link to={'/'} className="px-2 py-1 bg-green-400 text-white rounded-md" >Home</Link>
          <Link to={'/demo'} className="px-2 py-1 bg-green-400 text-white rounded-md" >Demo</Link>
      </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/auth",
    element: <Auth />
  },
  {
    path: "/demo",
    element: <div className="h-full w-screen bg-red-300 flex flex-col justify-center items-center gap-10">
          <h1>Checkout my other projects <a href="https://cv-arghyahub.vercel.app/">Here</a></h1>
          <LinkBtns />
      </div>
  },
  {
    path: "*",
    element: <div>I'll fix that</div>
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
