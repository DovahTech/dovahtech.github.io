import React from "react"
import Section from "@components/section";

export default function Servicos(){
  return (
    <Section title="services">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-6xl  font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold">Desenvolvimento Sistemas Personalizados</h3>
            </div>
            <p className="text-gray-600 text-sm">Criamos sites e aplicações web modernas e responsivas, utilizando as mais recentes tecnologias do mercado.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="text-xl font-semibold">Adequação LGPD</h3>
            </div>
            <p className="text-gray-600 text-sm">Política de Privacidade e Proteção de Dados,Sistema Gestão de Segurança da Informação</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <h3 className="text-xl font-semibold">Consultoria em TI</h3>
            </div>
            <p className="text-gray-600 text-sm">Fornecemos orientação especializada para otimizar seus processos de TI e impulsionar a eficiência do seu negócio.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <h3 className="text-xl font-semibold">Plano Diretor de TI</h3>
            </div>
            <p className="text-gray-600 text-sm">Desenvolvemos um plano estratégico para alinhar a tecnologia da informação aos objetivos de negócio da sua organização.</p>
          </div>
        </div>
      </div>
    </Section>
  )
}