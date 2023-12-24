import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import { useRecoilState } from "recoil";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

import "./App.css"
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { screenWidthAtom, toastParamAtom } from "./recoil/atom";

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
  const { toast } = useToast()
  // Calculating screen width
  const [ScreenWidth, setScreenWidth] = useRecoilState(screenWidthAtom);
  const [ToastState, setToastState] = useRecoilState(toastParamAtom);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // complete

  // Toast config
  useEffect(()=>{
    if (ToastState.desc.length===0) return;
    const copyToast = {...ToastState} ;
    if (copyToast.hasFunc){
      toast({ title: copyToast.title, description: copyToast.desc, action: <ToastAction onClick={copyToast.func} altText="Try again">Try again</ToastAction>, duration: 6000 })
    }
    else{
      toast({ title: copyToast.title, description: copyToast.desc, duration: 3000})
    }
    setToastState({title: '',desc:'',hasFunc: false, func: ()=>{}}) ;
  },[ToastState])



  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App;
