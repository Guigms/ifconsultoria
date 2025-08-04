// src/components/Testimonials.tsx
export type Testimonial = {
  name: string;
  photo: string;
  message: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Ermesson Guerreiro',
    photo: '/aluno1.jpeg',
    message: 'O curso me touxe vivências onde aperfeiçoou minhas técnicas me dando mais segurança em executa-las nos pacientes!',
  },
  {
    name: 'Ricksiany',
    photo: '/aluno2.jpeg',
    message: 'Minha experiência foi a melhor que já tive, agregou muito na minha graduação, eu me sinto cada dia mais capacitada. ',
  },
  {
    name: 'Vitor Matheus',
    photo: '/aluno3.jpeg',
    message: 'Fiz parte da primeira turma de Práticas Injetáveis da IF, foi simplesmente incrível, uma experiência teórica e prática muito além do que vimos na faculdade. Um aprendizado indispensável para minha vida profissional!',
  },
  {
    name: 'Leticia',
    photo: '/aluno4.jpeg',
    message: 'A IF marcou a minha trajetória profissional, me deu segurança, conhecimento e a oportunidade de crescer ainda mais na área da saúde. Com certeza foi um passo essencial para minha evolução.',
  },
  {
    name: 'Adeliane',
    photo: '/aluno5.jpeg',
    message: 'Quero deixar aqui meu carinho e admiração por esse professor incrível com uma paciência admirável, um jeitinho leve de explicar e um conhecimento que impressiona, ele fez toda a diferença na minha formação.',
  },
];
