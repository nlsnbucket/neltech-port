import { NextPage } from "next";
import Head from "next/head";


import Image, { StaticImageData } from 'next/image'
import { AuthButton } from "../components/AuthButton"







import qs from "query-string";
import axios from "axios";
import { useEffect } from "react";



//todo neltech client_id cf0189d7c923b324ca0c

function redirectToGithub() {
  const GITHUB_AUTH_URL = 'https://github.com/login/oauth/authorize';
  const params = {
    response_type: '8',
    scope: 'gustavocodigo test8888',
    client_id: "85e38c2f6d14b47f25a2",
    redirect_uri: window.location.href,
    state: 'test-t5'
  }

  const queryStrings = qs.stringify(params);
  const authorizationUrl = `${GITHUB_AUTH_URL}?${queryStrings}`;
  window.location.href = authorizationUrl;
}


function clickAuth() {
    redirectToGithub()
}



const Home: NextPage = () => {
    useEffect( () => {
        try {
            const querys = qs.parseUrl(window.location.href).query
            if ( querys.code != undefined) {
                alert("CODIGO DO GITHUB: "+ querys.code)
            }
        }catch(e) {
            console.log(e)
        }
    },[])
    return (
        <>
            <Head>
                <title>Neltech - Home</title>
            </Head>
            <main className="bg-comp-home bg-no-repeat bg-bottom text-white mx-auto max-w-full  px-8 lg:px-12  w-[1400px] px-10px h-full ">
                <div className="w-full h-full flex items-center justify-center mt-[200px] flex-col w-[400px] m-auto max-w-full bg-white p-12 text-black shadow-2xl">

                    <div className="w-[450px] max-w-full">
                        <h1 className="font-bold">Bem vindo(a)</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores necessitatibus nam cumque esse ducimus laudantium quo perferendis iure asperiores fugit libero, hic reprehenderit incidunt quisquam illo deleniti est. Harum?</p>
                    </div>

                    <AuthButton className="mt-4 flex text-black items-center bg-red gap-6 bg-white w-full rounded p-1 pr-2 font-bold shadow-2xl border border-gray-500" onClick={clickAuth}>
                        <Image src="/github.svg" width="48" height="48" alt="" className="color-black"></Image>
                        Entrar com GitHub
                    </AuthButton>


                </div>


            </main>

        </>
    )
}

export default Home