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
        <title>Neltech - Home</title>
      </Head>

      <PublicLayout>
        <main className="pt-14 bg-comp-home bg-no-repeat bg-bottom text-white">
          <section className="bg-hero-home bg-no-repeat h-[37.5rem] bg-right px-6">
            <h1 className="w-72 text-6xl mb-20">Lorem Ipsum</h1>

            <p className="w-[29rem] text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, diam nec tincidunt vehicula, justo tortor accumsan diam, vel consectetur Fusce ac elementum nisl. Nulla facilisi.</p>
          </section>

          <section className="flex flex-col gap-24 px-24 pt-[4.5rem]">
            <Article 
              imageData={Proposition}
              alt="Mão interagindo com um dispositivo que apresenta um grafico"
              title="Pedido"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet, libero eu laoreet mollis, arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet, libero eu laoreet mollis, arcu."
            />

            <Article
              textFirst
              imageData={Review}
              title="Analise"
              alt="Papel com uma lista representando etapas de uma analise"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet, libero eu laoreet mollis, arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet, libero eu laoreet mollis, arcu."
            />

            <Article 
              imageData={Budget}
              title="Orçamento e Contato"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet, libero eu laoreet mollis, arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet, libero eu laoreet mollis, arcu."
            />
          </section>

          <section className="pt-48 pb-[28rem]">
            <h2 className="mx-auto w-max text-6xl mb-8">Entre em Contato</h2>
            <div className="mx-auto bg-gray-300 w-[45rem] mt-10 flex flex-col gap-4 mb-4 px-12 py-7 rounded-lg">
              <form onSubmit={handleSubmit(handleNewProject)} className="grid">
                <Input label="Nome" {...register('name')}/>
                <MaskedInput label="Telefone" mask="(99) 99999-9999" {...register('phone')}/>
                <Textarea label="Descrição do projeto" {...register('description')}/>
                <Textarea label="Motivação" {...register('motivation')}/>

                <button type="submit" className="bg-[#022C54] h-14 w-52 rounded-md mt-10 justify-self-center">Enviar</button>
              </form>
            </div>
          </section>
        </main>
      </PublicLayout>
    </>
  )
}

export default Home