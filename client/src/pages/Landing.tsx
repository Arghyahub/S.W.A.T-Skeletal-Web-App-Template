import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";

import { USER } from "@/services/service";
import { userDataAtom } from "@/recoil/atom";
import SimpleNavbar from "@/components/navbar/SimpleNavbar";
import { backgroundImg , AuthVec } from "@/assets";
import { ImgTxtCarousel } from "@/components/reusables";

const DummyCarouselAction = [
  {img: backgroundImg , text: 'This is Img + text'},
  {img: AuthVec, orHtml: <p>orHtml attribute is important if you want to include links like <a href="http://github.com/arghyahub" className="text-blue-500">This</a></p>},
  {text: 'No Image page'}
]

const DummyMembers = [
  {img: AuthVec, text: 'Arghya'},
  {img: AuthVec, text: 'Also Arghya'},
  {img: AuthVec, text: 'Arghya but better'},
]

const Landing = () => {
  const navigate = useNavigate() ;
  const [User, setUser] = useRecoilState(userDataAtom) ;

  useEffect(() => {
    USER.validate(navigate,setUser) ;
  }, [])

  return (
    <div className="h-full w-full">
      <SimpleNavbar/>

      <div className="w-full h-[85vh] bg-no-repeat bg-center bg-contain relative text-[var(--primary)] flex flex-col justify-center items-center gap-4 font-serif">
        <img src={backgroundImg} alt="background" className="w-full h-full object-cover absolute -z-10" />
        <h1 className="text-center">Welcome to [SiteName]</h1>
        <p className="w-4/5 md:w-3/5">Short note about site, Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi et ipsum reiciendis quisquam iusto voluptas beatae adipisci! Tenetur nisi distinctio quis, cupiditate amet nesciunt facere consectetur eveniet aliquid, laudantium maiores expedita.</p>
        <h4 className="text-center">Signup to and launch a new journey with us</h4>
        <div className="flex flex-row gap-4 mx-2">
          <Link to='/auth/signup' className='px-2 py-1 bg-[var(--primary)] rounded-lg font-mono text-sm text-cyan-800 hover:bg-lime-400 hover:text-blue-700'>Signup</Link>
          <Link to='/auth/login' className='px-2 py-1 bg-[var(--primary)] rounded-lg font-mono text-sm text-cyan-800 hover:bg-lime-400 hover:text-blue-700'>Login</Link>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-10 min-h-[80vh] bg-[var(--background)] text-white">
        <h2 className="font-semibold">Explain what you do</h2>
        <p className="w-4/5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod ipsam pariatur beatae molestias qui nisi possimus velit deserunt porro distinctio, architecto voluptatum dolorem id iste expedita temporibus voluptatem, nesciunt vel inventore. Pariatur commodi nobis dolor facilis corporis minima necessitatibus!</p>
      </div>

      <div className="flex flex-col justify-center items-center gap-6 w-full min-h-[75vh] bg-[var(--foreground)] text-white">
        <h1 className="font-serif">How to use/usecase</h1>
        <ImgTxtCarousel DataArr={DummyCarouselAction} />

        <p className="w-4/5 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum fugit aut numquam, rem doloremque quia excepturi aspernatur voluptatibus nemo iusto.</p>
      </div>

      <div className="flex flex-col w-full min-h-[75vh] bg-[var(--hover)] gap-4 justify-center items-center text-white text-center">
        <h2 className="font-semibold">Why you should use our product</h2>
        <p className="w-4/5">Add images and text to justify. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint labore ipsa praesentium atque ratione modi totam laborum delectus dolor sapiente.</p>
      </div>

      <div className="flex flex-col w-full min-h-[75vh] bg-zinc-700 gap-6 justify-center items-center text-white text-center">
        <h2 className="font-semibold">Team members or reviews</h2>
        <ImgTxtCarousel DataArr={DummyMembers} cardAspectClass="aspect-[16/12]" className="max-w-[250px] md:max-w-sm lg:max-w-sm" imgClassname='rounded-full w-32 h-32 border-2' />
      </div>

    </div>
  )
};

export default Landing;
