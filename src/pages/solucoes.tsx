import { Header } from "@components/Header"
import Footer from "@parts/footer";
import { HeadFC, PageProps } from "gatsby";
import React from "react"



const Solucoes:React.FC<PageProps> = () => {
  return(
    <>
    <Header/>
    <main className="bg-gray-100 min-h-screen font-montserrat">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Nossas Soluções</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Estoque Fácil</h2>
            <p className="text-gray-600 mb-4">
              Sistema de controle de estoque desenvolvido especialmente para a cozinha piloto da Prefeitura. 
              Otimize o gerenciamento de insumos e reduza desperdícios.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Controle preciso de entrada e saída de produtos</li>
              <li>Alertas de estoque baixo</li>
              <li>Relatórios detalhados de consumo</li>
              <li>Interface intuitiva e fácil de usar</li>
            </ul>
            <a href="https://wa.link/hvvgvu" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Saiba Mais
            </a>
          </div>

          {/* <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Cidade Conecta</h2>
            <p className="text-gray-600 mb-4">
              Aplicativo de turismo que conecta visitantes aos principais pontos turísticos, 
              restaurantes e hotéis da cidade. Impulsione o turismo local com tecnologia.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Mapa interativo com pontos de interesse</li>
              <li>Informações detalhadas sobre atrações turísticas</li>
              <li>Avaliações e comentários de usuários</li>
              <li>Integração com sistemas de reserva de hotéis e restaurantes</li>
            </ul>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
              Conheça o app
            </button>
          </div> */}
          {/* <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Ponto Unificado</h2>
            <p className="text-gray-600 mb-4">
              Sistema de controle de ponto eletrônico unificado para todos os setores da Prefeitura. 
              Gerencie de forma eficiente a entrada e saída dos servidores públicos.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Registro biométrico de ponto</li>
              <li>Integração com todos os setores da Prefeitura</li>
              <li>Relatórios detalhados de frequência</li>
              <li>Gestão de banco de horas e horas extras</li>
              <li>Conformidade com as leis trabalhistas</li>
            </ul>
            <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300">
              Solicitar demonstração
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Portal Cidadão</h2>
            <p className="text-gray-600 mb-4">
              Sistema de site completo para Prefeituras e Câmaras Municipais, focado na transparência e disponibilidade de informações para os cidadãos.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Portal da Transparência integrado</li>
              <li>Publicação de notícias e eventos municipais</li>
              <li>Acesso fácil a dados públicos e documentos oficiais</li>
              <li>Agenda de eventos da cidade</li>
              <li>Design responsivo e acessível</li>
              <li>Integração com redes sociais</li>
            </ul>
            <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-300">
              Solicitar orçamento
            </button>
          </div> */}
        </div>
      </section>
    </main>
    <Footer/>
    </>
  )
};

export default Solucoes;


export const Head: HeadFC = () => <title>Dovah Tech - Nossas Soluções</title>;