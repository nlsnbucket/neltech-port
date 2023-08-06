import { NextPage } from "next";
import Head from "next/head";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import { PublicLayout } from "../layouts/PublicLayout";

import { Article } from "../components/Article";

import { Input } from "../components/Form/Input";
import { MaskedInput } from "../components/Form/MaskedInput";
import { Textarea } from "../components/Form/Textarea";

import Proposition from "@/public/pedido.png";
import Review from "@/public/analise.png";
import Budget from "@/public/orcamento.png";
import Image, { StaticImageData } from "next/image";

const NewProjectFormSchema = z.object({
  name: z.string().min(3, "Digite o seu nome"),
  phone: z
    .string()
    .transform((value) => value.replace(/[^0-9]/g, ""))
    .refine((value) => value.length === 11, "Numero invalido"),
  description: z.string().min(3, "Digite alguma coisa"),
  motivation: z.string().min(3, "Digite alguma coisa"),
});

type NewProjectFormData = z.infer<typeof NewProjectFormSchema>;

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm<NewProjectFormData>({
    resolver: zodResolver(NewProjectFormSchema),
  });

  function handleNewProject(data: NewProjectFormData) {
    console.log(data);
  }

  return (
    <>
      <Head>
        <title>Neltech - Home</title>
      </Head>

      <PublicLayout className="mt-[120px]">
        <main className="bg-comp-home bg-no-repeat bg-bottom text-white mx-auto max-w-full  px-8 lg:px-12  w-[1400px] px-10px ">
          <section
            className="flex items-center  w-full justify-between flex-wrap"
            style={{ minHeight: "calc(100vh - 210px)" }}
          >
            <div className="max-w-full w-md-full md:w-[580px] ">
              <h1 className="text-4xl mb-10">Lorem Ipsum</h1>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aut reiciendis veniam autem laudantium pariatur,
                reprehenderit, voluptate dolores corporis veritatis voluptas
                nesciunt ducimus quod commodi! Quas quod accusantium
                consequuntur est et!
              </p>
            </div>

            <Image
              className="hidden  md:w-[530px] hidden lg:block"
              src="/backg.png"
              alt=""
              width={1000}
              height={1000}
            />
          </section>

          <section className="flex flex-col gap-24 md:px-8 pt-[4.5rem] flex-wrap ">
            <section id="article-pedido">
              <Article
                imageData={Proposition}
                alt="Mão interagindo com um dispositivo que apresenta um grafico"
                title="Pedido"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet, libero eu laoreet mollis, arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet, libero eu laoreet mollis, arcu."
              />
            </section>
            <section id="article-fluxo">
              <Article
                textFirst
                imageData={Review}
                title="Analise"
                alt="Papel com uma lista representando etapas de uma analise"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet, libero eu laoreet mollis, arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet, libero eu laoreet mollis, arcu."
              />
            </section>

            <Article
              imageData={Budget}
              title="Orçamento e Contato"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet, libero eu laoreet mollis, arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet, libero eu laoreet mollis, arcu."
            />
          </section>

          <section className="pt-48 pb-[28rem] flex justify-center lg:justify-between flex-wrap items-center m-auto">
            <div>
              <h2 className="mx-auto mb-8 text-left">Entre em Contato</h2>
              <p className="max-w-full md:max-w-[400px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores quasi, totam rem numquam obcaecati doloremque, ipsa
                voluptate quibusdam explicabo sit quis incidunt magnam quae
                velit tempore earum iste beatae hic?
                <br></br>
                <br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus aperiam quidem earum consectetur fuga suscipit harum,
                odit reprehenderit accusantium quibusdam dolore possimus
                laudantium! Modi dolore quam aut architecto illum beatae.
              </p>
            </div>

            <div className="max-w-full px-1">
              <div className="mx-auto bg-gray-300 w-[350px] max-w-full mt-8 flex flex-col gap-2 md:gap-4 lg:gap-4 mb-4 px-6 py-7 rounded-lg">
                <form
                  onSubmit={handleSubmit(handleNewProject)}
                  className="grid"
                >
                  <Input label="Nome" {...register("name")} />
                  <MaskedInput
                    label="Telefone"
                    mask="(99) 99999-9999"
                    {...register("phone")}
                  />
                  <Textarea
                    label="Descrição do projeto"
                    {...register("description")}
                  />
                  <Textarea label="Motivação" {...register("motivation")} />
                  <button
                    type="submit"
                    className="bg-[#022C54] rounded-md  py-2 mt-4 shadow"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </PublicLayout>
    </>
  );
};

export default Home;
