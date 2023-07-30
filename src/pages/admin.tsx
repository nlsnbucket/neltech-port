import { NextPage } from "next";
import Head from "next/head";

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'

import { PublicLayout } from "../layouts/PublicLayout";

import { Article } from "../components/Article";

import { Input } from "../components/Form/Input";
import { MaskedInput } from "../components/Form/MaskedInput";
import { Textarea } from "../components/Form/Textarea";

import Proposition from '@/public/pedido.png'
import Review from '@/public/analise.png'
import Budget from '@/public/orcamento.png'

const NewProjectFormSchema = z.object({
  name: z.string().min(3, 'Digite o seu nome'),
  phone: z.string().transform((value) => value.replace(/[^0-9]/g, '')).refine(value => value.length === 11, "Numero invalido"),
  description: z.string().min(3, 'Digite alguma coisa'),
  motivation: z.string().min(3, 'Digite alguma coisa')
})

type NewProjectFormData = z.infer<typeof NewProjectFormSchema>

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm<NewProjectFormData>({
    resolver: zodResolver(NewProjectFormSchema)
  })

  function handleNewProject(data: NewProjectFormData) {
    console.log(data)
  }

  return(
    <>
      <Head>
        <title>Neltech - Admin</title>
      </Head>

      <PublicLayout>
        <main className="pt-14 bg-comp-home bg-no-repeat bg-bottom text-white max-w-full w-[600px] mx-auto" >
            <div>
                <div className="p-8 border-2 rounded flex items-center gap-4">
                    <img src="github.svg" width="50"></img>
                    <h1>Entrar com o github</h1>
                </div>
            </div>


        </main>
      </PublicLayout>
    </>
  )
}

export default Home