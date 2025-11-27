import Link from "next/link";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Perguntas Frequentes",
  items = [
    {
      question:
        "Por que reduzir faltas em consultas é tão importante para clínicas?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Faltas em consultas geram prejuízo financeiro e impactam o atendimento
            dos pacientes. Automatizar lembretes e confirmações pelo WhatsApp
            reduz drasticamente o número de ausências e aumenta a eficiência da
            clínica.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            O Notly automatiza esse processo, economizando tempo da equipe e
            melhorando a experiência dos pacientes.
          </p>
        </>
      ),
    },
    {
      question:
        "Por que usar o Notly ao invés de fazer manualmente ou usar planilhas?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            O controle manual é demorado, sujeito a erros e não escala conforme a
            clínica cresce. Planilhas não enviam mensagens automáticas e exigem
            acompanhamento constante.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            Com o Notly, todo o processo é automatizado: envio, confirmação e
            reagendamento, sem trabalho manual.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            Assim, sua equipe foca no atendimento e não em tarefas repetitivas.
          </p>
        </>
      ),
    },
    {
      question:
        "Como o Notly é diferente de outros sistemas de lembrete?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            O Notly foi criado especialmente para clínicas brasileiras, com
            integrações e mensagens personalizadas para o WhatsApp.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            O sistema é simples de usar, não exige instalação e pode ser
            configurado em minutos.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Além disso, oferecemos suporte em português e total conformidade com
            a LGPD.
          </p>
        </>
      ),
    },
    {
      question: "O Notly integra com meu sistema de agendamento?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Sim! O Notly pode ser integrado facilmente com os principais sistemas de agendamento do mercado, facilitando a importação automática de consultas e pacientes.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Caso seu sistema não esteja na lista, entre em contato para avaliarmos a integração.
          </p>
        </>
      ),
    },
    {
      question: "Posso personalizar as mensagens enviadas pelo Notly?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          Sim! Você pode editar o conteúdo das mensagens de lembrete, confirmação e reagendamento, adaptando o tom e as informações conforme a necessidade da sua clínica.
        </p>
      ),
    },
    {
      question: "Posso conseguir desconto?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Sim! Se você deseja testar novas funcionalidades e dar feedback,
            entre em contato por{" "}
            <a
              href={siteConfig.links.email}
              className="underline underline-offset-2"
            >
              email
            </a>
            . Temos condições especiais para clínicas parceiras e grupos.
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
