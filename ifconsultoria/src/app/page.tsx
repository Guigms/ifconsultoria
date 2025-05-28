// app/page.tsx
'use client';

import Image from 'next/image';
import Head from 'next/head';
import LogoMin from '../../public/logomin.png';
import LogoMax from '../../public/logomax.png'

export default function Home() {
  return (
    <main className="bg-black text-white font-sans">
      <Head>
        <title>Dr. Ismael Frota - Enfermagem</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 bg-black shadow-md">
        <div className="flex items-center space-x-4">
          <Image src={LogoMin} alt="Logo" className="h-16 w-auto" />
          <h1 className="text-3xl font-extrabold tracking-wide"></h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6 text-yellow-400">Excelência em Enfermagem</h2>
          <p className="text-xl text-gray-200 mb-8">Cuidado, consultoria e capacitação com um toque humano e profissional.</p>
          <div className="overflow-hidden rounded-1xl shadow-2xl inline-block animate-fade-in">
            <Image src={LogoMax} alt="Dr. Ismael Frota" className="w-full max-w-xl mx-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-24 px-6 bg-black">
        <h3 className="text-4xl font-bold text-center mb-16 text-yellow-400">Nossos Serviços</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto text-lg text-gray-300">
          {[
            'Atendimentos de Enfermagem',
            'Consultoria em Saúde',
            'Cursos e Capacitação',
            'Palestras e Eventos',
            'Capacitação Profissional',
            'Atendimento Domiciliar'
          ].map((title, idx) => (
            <div key={idx} className="p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-700">
              <h4 className="font-semibold text-xl text-white mb-2">{title}</h4>
              <p>Serviços especializados e humanizados com foco em qualidade e excelência.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6 bg-yellow-500 text-black">
        <h4 className="text-4xl font-bold mb-4">Vamos cuidar juntos da saúde?</h4>
        <p className="text-lg mb-6">Fale conosco para agendar atendimentos ou conhecer nossos serviços.</p>
        <a href="#" className="bg-black text-yellow-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition duration-300">
          Entrar em Contato
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center text-sm py-8 text-gray-500">
        &copy; 2025 Feito por GMSolution. Todos os direitos reservados.
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
