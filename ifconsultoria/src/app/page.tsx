// Arquivo: app/page.tsx (Código completo e corrigido)

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import Head from 'next/head';
import LogoMin from '../../public/logomin.png';
import LogoMax from '../../public/logomax.png';
import { testimonials } from './components/testimonials';
import CeoImage from '../../public/CEO2.jpeg';
import { Target, Eye, Star } from 'lucide-react';
import equipe from '../../public/equipe.jpeg';
import { useState } from 'react';
import Swal from 'sweetalert2';


export default function Home() {
  const [cursoSelecionado, setCursoSelecionado] = useState<string | null>(null);

  // NOVA FUNÇÃO para lidar com o envio do formulário de cursos
  const handleSubmitCurso = async (event: React.FormEvent<HTMLFormElement>) => {
    // 1. Previne o comportamento padrão (recarregar a página)
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      // 2. Envia os dados para o FormSubmit usando a API Fetch
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // 3. Se o envio foi um sucesso, fecha o modal...
        setCursoSelecionado(null);
        // ... e depois mostra o alerta bonito
        Swal.fire({
          icon: 'success',
          title: 'Enviado com Sucesso!',
          text: 'Seu interesse foi registrado. Em breve entraremos em contato.',
          confirmButtonColor: '#facc15' // Cor amarela do seu site
        });
      } else {
        // Mostra um alerta de erro caso algo dê errado
        throw new Error('Falha no envio do formulário.');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro ao enviar seu interesse. Tente novamente mais tarde.',
        confirmButtonColor: '#facc15'
      });
    }
  };

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

      <section className="py-24 px-6 bg-black text-white text-center">
        <h3 className="text-4xl font-bold text-yellow-400 mb-12">Nossos Cursos</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              nome: 'Práticas Injetáveis',
              descricao:
                'Curso destinado a desenvolver competências e habilidades relacionadas a procedimentos injetáveis. Neste  curso você desenvolverá suas habilidades para rotinas injetáveis com mais segurança e muita destreza técnica.',
            },
            {
              nome: 'Ventilação Mecânica da Teoria a Prática',
              descricao:
                'Um curso planejado para ajudar acadêmicos e profissionais da saúde descomplicando o entendimento e o manejo prático para aqueles que apresentam atribuição no manejo da ventilaç!ao mecânica.',
            },
            {
              nome: 'Interpretação de ECG para Enfermagem do Básico ao Avançado',
              descricao:
                'Curso destinado a desenvolver compeências relacionadas a execução e interpretação do exame ECG. Neste curso voc§e desenvolverá seu raciocínio clínico avançado na interpretação do exame e suas habilidades procedurais na aplicação da técnica do exame ECG.',
            },
          ].map((curso, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 flex flex-col"
            >
              <h4 className="text-2xl font-semibold mb-4 text-white">
                {curso.nome}
              </h4>
              <p className="text-gray-300 mb-6 flex-grow">{curso.descricao}</p>
              <button
                onClick={() => setCursoSelecionado(curso.nome)}
                className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition mt-auto"
              >
                Tenho Interesse
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal com formulário CORRIGIDO */}
      {cursoSelecionado && (
        <section className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <form
            // Lembre-se de substituir pelo seu e-mail real
            action="https://formsubmit.co/financeiro@ifenfermagem.com.br"
            method="POST"
            className="bg-white text-black p-8 rounded-xl shadow-xl w-full max-w-md space-y-4"
            onSubmit={handleSubmitCurso} // AQUI está a chamada para a nova função
          >
            <h4 className="text-2xl font-bold mb-4 text-center">Interesse: {cursoSelecionado}</h4>

            <input type="hidden" name="curso" value={cursoSelecionado} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value={`Novo Interesse no Curso: ${cursoSelecionado}`} />

            <input type="text" name="nome" placeholder="Seu nome completo" required className="w-full p-3 border rounded-md" />
            <input type="email" name="email" placeholder="Seu melhor e-mail" required className="w-full p-3 border rounded-md" />
            <input type="text" name="telefone" placeholder="Seu telefone/WhatsApp" required className="w-full p-3 border rounded-md" />

            <div className="flex justify-between items-center mt-6">
              <button type="submit" className="bg-yellow-400 px-6 py-2 rounded-full font-bold hover:bg-yellow-300">
                Enviar
              </button>
              <button
                type="button"
                onClick={() => setCursoSelecionado(null)}
                className="text-gray-600 hover:underline"
              >
                Cancelar
              </button>
            </div>
          </form>
        </section>
      )}

      {/* Seção do CEO */}
      <section className="py-24 px-6 bg-gray-900 text-center md:text-left">
        <h3 className="text-4xl font-bold text-yellow-400 mb-16 text-center">Nosso CEO</h3>
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl mx-auto gap-10">
          <Image
            src={CeoImage}
            alt="CEO"
            width={360}
            height={480}
            className="rounded-3xl object-cover border-4 border-yellow-400 shadow-lg"
          />
          <div>
            <h4 className="text-3xl font-semibold mb-4 text-white">Dr. Ismael Frota</h4>
            <div className="text-lg text-gray-300 leading-relaxed space-y-4">
              <p>
                <strong>CEO da IF Atendimentos e Consultorias em Enfermagem</strong>
              </p>
              <p>
                Enfermeiro Assistente da Atenção Secundária e Especializada de Maracanaú
              </p>
              <p>
                <strong>Especializações:</strong><br />
                - Planejamento e Gestão em Saúde<br />
                - Auditoria dos Serviços de Saúde<br />
                - Vigilância em Saúde<br />
                - Saúde da Mulher<br />
                - Enfermagem Obstétrica<br />
                - Urgência e Emergência em Enfermagem<br />
                - Enfermagem Forense (em andamento)
              </p>
              <p>
                <strong>Formações:</strong><br />
                - Graduação em Gestão de Serviços em Saúde<br />
                - Graduação em Enfermagem<br />
                - Mestrado em Unidade de Terapia Intensiva
              </p>
              <p>
                Professor Universitário e Coordenador de Enfermagem da Uninassau Maracanaú
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção da Equipe */}
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

      {/* Seção de Depoimentos */}
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
                  <Image
                    src={t.photo} // Assumindo que t.photo é um caminho ou URL
                    alt={t.name}
                    width={192} // 12rem
                    height={192} // 12rem
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

      {/* Seção Missão, Visão, Valor */}
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
            <h4 className="text-2xl font-semibold mb-2 text-yellow-300">Valores</h4>
            <p className="text-lg text-gray-300">
              Ética, humanização no atendimento, valorização das pessoas, satisfação em atender bem, responsabilidade social.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="text-center py-20 px-6 bg-yellow-500 text-black">
        <h4 className="text-4xl font-bold mb-4">Vamos cuidar juntos da saúde?</h4>
        <p className="text-lg mb-6">Fale conosco para agendar atendimentos ou conhecer nossos serviços.</p>
        <a href="https://wa.me/5585988885910" target="_blank" rel="noopener noreferrer" className="bg-black text-yellow-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition duration-300">
          Entrar em Contato
        </a>
      </section>

      {/* Rodapé */}
      <footer className="bg-black text-center text-sm py-8 text-gray-500">
        &copy; {new Date().getFullYear()} Feito por{" "}
        <a href="https://gmsolutionti.com.br" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GMSolution</a>. Todos os direitos reservados.
      </footer>

      {/* Estilos JSX para animações */}
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