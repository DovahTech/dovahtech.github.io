import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "@components/Header";
import Section from "@components/section/index";
import Servicos from "@parts/serviços";
import Team from "@parts/team";
import { Time } from "@types";
import Footer from "@parts/footer";
import Depoimentos from "@parts/depoimentos";



const IndexPage: React.FC<PageProps> = () => {


  const time: Array<Time> = [
    {
      nome: "Iuri Ramos",
      imagem: "https://avatars.githubusercontent.com/u/35300523?v=4&size=auto",
      cargo: "Dev|DPO|DevOps",
      formacao: "Formado em Análise e Desenvolvimento de sistemas e Pós Graduado em Segurança da Informação"
    },
    {
      nome: "Levi Moraes",
      imagem: "https://avatars.githubusercontent.com/u/185364444?v=4&size=auto",
      cargo: "CEO",
      formacao: "TI"
    },
    {
      nome: "Dener Bassani",
      imagem: "https://scontent.fmii2-1.fna.fbcdn.net/v/t39.30808-6/463624024_8284777594978841_5358098751387762675_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHahblKZ6SBnUM4tJm0ycTASKghFAkhv4hIqCEUCSG_iPxO_RyUnZmwvjZY9gvWE-4ooVfFR22nvCZJ1opj-2pw&_nc_ohc=yiRylYC5P-YQ7kNvgGgF1zQ&_nc_zt=23&_nc_ht=scontent.fmii2-1.fna&_nc_gid=AV7STNH15IO1iApuQdhWvfM&oh=00_AYCiTgXwTgiQHYzi7wwHk0uIv-rZCMxFd01j7ZKYrxWcnA&oe=6731D4F3",
      cargo: "Teste Qualidade",
      formacao: "TI"
    },
    {
      nome: "Eduardo Romano ",
      imagem: "https://scontent.fmii2-2.fna.fbcdn.net/v/t1.6435-9/101683898_1440096862828507_7936895354492944384_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEbLn-ZEG7WjpaAtwPQIahYkiftnyVfTcuSJ-2fJV9Ny0umsCDPsvMCw-vExLPfIPjmjH-zIBBycrpe28h88IqJ&_nc_ohc=wrPBN8UPuMUQ7kNvgGBrPVg&_nc_zt=23&_nc_ht=scontent.fmii2-2.fna&_nc_gid=AJPDH-VHYQdaJgcN88t6otB&oh=00_AYDZ75l2-Xg0HdTFLPT1UVKD9_8JLv9PAENjb4FEdCeNRg&oe=67537E51",
      cargo: "UI/UX",
      formacao: "TI"
    },
    
  ];
  return (
    <>
      <Header />
      <main className=" w-full min-h-screen container-lg mx-auto bg-gray-300 font-montserrat">
        <Section className="py-48 px-4 bg-[url('https://i.gifer.com/J4o.gif')] bg-cover">
          <h1 className="text-7xl text-white font-medium">Dovahtech</h1>
          <h4 className="text-2xl text-white font-light">
            Facilitando a Gestão Pública por meio da tecnologia
          </h4>
          {/* <button className="p-4 bg-zinc-600 text-bold font-semibold font-serif rounded-full my-5 text-white ">
            Saiba Mais
          </button> */}
        </Section>
        {/* <Depoimentos/> */}
      <Servicos/>
        <Team equipe={time}/>
      </main>
      <Footer/>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Dovah Tech</title>;
