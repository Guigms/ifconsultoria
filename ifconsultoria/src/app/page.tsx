// app/page.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Head from 'next/head';
import LogoMin from '../../public/logomin.png';
import LogoMax from '../../public/logomax.png';
import { testimonials } from './components/testimonials';
import CeoImage from '../../public/CEO2.jpeg';
import 'swiper/css/effect-fade';
import { Target, Handshake, Star, Eye } from 'lucide-react';
import equipe from '../../public/equipe.jpeg'


export default function Home() {
  return (
    <main className="bg-black text-white font-sans">
      <Head>
        <title>Dr. Ismael Frota - Enfermagem</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="flex items-center justify-between px-8 py-6 bg-black shadow-md">
        <div className="flex items-center space-x-4">
          <Image src={LogoMin} alt="Logo" className="h-16 w-auto" />
        </div>
      </header>

      <section className="relative text-center py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6 text-yellow-400">Excelência em Enfermagem</h2>
          <p className="text-xl text-gray-200 mb-8">Cuidado, consultoria e capacitação com um toque humano e profissional.</p>
          <div className="overflow-hidden rounded-1xl shadow-2xl inline-block animate-fade-in">
            <Image src={LogoMax} alt="Dr. Ismael Frota" className="w-full max-w-xl mx-auto object-cover" />
          </div>
        </div>
      </section>

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

      {/* CEO Section */}
     <section className="py-24 px-6 bg-gray-900 text-center md:text-left">
  <h3 className="text-4xl font-bold text-yellow-400 mb-16 text-center">Nosso CEO</h3>
  <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl mx-auto gap-10">
    <Image
      src={CeoImage}
      alt="CEO"
      className="rounded-3xl w-90 h-120 object-cover border-4 border-yellow-400 shadow-lg"
    />
    <div>
      <h4 className="text-3xl font-semibold mb-4 text-white">Dr. Ismael Frota</h4>
     <p className="text-2xl text-gray-300 leading-relaxed space-y-4">
  <span className="block">
    <strong>CEO da IF Atendimentos e Consultorias em Enfermagem</strong>
  </span>

  <span className="block">
    Enfermeiro Assistente da Atenção Secundária e Especializada de Maracanaú
  </span>

  <span className="block">
    <strong>Especializações:</strong><br />
    - Planejamento e Gestão em Saúde<br />
    - Auditoria dos Serviços de Saúde<br />
    - Vigilância em Saúde<br />
    - Saúde da Mulher<br />
    - Enfermagem Obstétrica<br />
    - Urgência e Emergência em Enfermagem<br />
    - Enfermagem Forense (em andamento)
  </span>

  <span className="block">
    <strong>Formações:</strong><br />
    - Graduação em Gestão de Serviços em Saúde<br />
    - Graduação em Enfermagem<br />
    - Mestrado em Unidade de Terapia Intensiva
  </span>

  <span className="block">
    Professor Universitário e Coordenador de Enfermagem da Uninassau Maracanaú
  </span>
</p>

    </div>
  </div>
</section>
<section className="py-24 px-6 bg-gray-900 text-center text-white">
  <h3 className="text-4xl font-bold text-yellow-400 mb-8">Nossa Equipe</h3>
  <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
    Uma equipe dedicada, capacitada e apaixonada pelo cuidado com a saúde. Trabalhamos juntos para oferecer excelência e humanização em todos os atendimentos.
  </p>
  <div className="flex justify-center">
    <Image
      src={equipe}
      alt="Equipe IF"
      className="rounded-3xl shadow-2xl border-4 border-yellow-400 max-w-4xl w-full object-cover"
    />
  </div>
</section>

<section className="bg-gray-900 py-24 px-6">
  <h3 className="text-4xl font-bold text-yellow-400 text-center mb-16">
    Depoimentos de Alunos
  </h3>

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <Swiper
      spaceBetween={30}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={1000}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      className="max-w-5xl mx-auto"
    >
      {testimonials.map((t, i) => (
        <SwiperSlide key={i}>
          <div className="bg-gray-800 p-10 rounded-3xl text-white text-center shadow-xl flex flex-col items-center transition-all duration-1000 ease-in-out">
            <img
              src={t.photo}
              alt={t.name}
              className="w-48 h-48 rounded-full mb-4 object-cover border-4 border-yellow-400 transition-transform duration-500 hover:scale-105"
            />
            <p className="text-xl italic mb-4">"{t.message}"</p>
            <h5 className="text-lg font-semibold text-yellow-400">{t.name}</h5>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </motion.div>
</section>
<section className="py-24 px-6 bg-black text-white text-center">
  <h3 className="text-4xl font-bold text-yellow-400 mb-16">Nossa Essência</h3>
  <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-left">
    
    <div className="flex flex-col items-center text-center px-4">
      <Target className="w-12 h-12 text-yellow-400 mb-4" />
      <h4 className="text-2xl font-semibold mb-2 text-yellow-300">Missão</h4>
      <p className="text-lg text-gray-300">
        Promover a qualificação de profissionais e estudantes da saúde para o desenvolvimento de uma assistência e gerenciamento, proporcionando a melhoria no atendimento ao paciente.
      </p>
    </div>

    <div className="flex flex-col items-center text-center px-4">
      <Eye className="w-12 h-12 text-yellow-400 mb-4" />
      <h4 className="text-2xl font-semibold mb-2 text-yellow-300">Visão</h4>
      <p className="text-lg text-gray-300">
        Ser reconhecida em território estadual como uma empresa de serviços educacionais e de consultoria em saúde.
      </p>
    </div>

    <div className="flex flex-col items-center text-center px-4">
      <Star className="w-12 h-12 text-yellow-400 mb-4" />
      <h4 className="text-2xl font-semibold mb-2 text-yellow-300">Valor</h4>
      <p className="text-lg text-gray-300">
        ética, humanização no atendimento, valorização das pessoas, satisfação em atender bem, responsabilidade social.
      </p>
    </div>

  </div>
</section>



      <section className="text-center py-20 px-6 bg-yellow-500 text-black">
        <h4 className="text-4xl font-bold mb-4">Vamos cuidar juntos da saúde?</h4>
        <p className="text-lg mb-6">Fale conosco para agendar atendimentos ou conhecer nossos serviços.</p>
        <a href="https://www.contate.me/5585988885910" className="bg-black text-yellow-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition duration-300">
          Entrar em Contato
        </a>
      </section>

      <footer className="bg-black text-center text-sm py-8 text-gray-500">
        &copy; 2025 Feito por{" "}
        <a href="https://gmsolutionti.com.br" className="text-blue-500 hover:underline">GMSolution</a>. Todos os direitos reservados.
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
