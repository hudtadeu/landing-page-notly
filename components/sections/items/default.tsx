import {
  ClockIcon,
  LanguagesIcon,
  MessageCircleIcon,
  SettingsIcon,
  ShieldCheckIcon,
  BarChart3Icon,
  CheckCircle2Icon,
  UserCheckIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription,ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Tudo que você precisa. Sem surpresas.",
  items = [
    {
      title: "Recupere 20h por mês",
      description: "Automatize 100% das confirmações. Zero trabalho manual.",
      icon: <ClockIcon className="size-5 stroke-1" />,
    },
    {
      title: "WhatsApp Automático",
      description: "Envio de mensagens e respostas automáticas pelo WhatsApp.",
      icon: <MessageCircleIcon className="size-5 stroke-1" />,
    },
    {
      title: "Configuração em 10min",
      description: "Comece a usar rapidamente, sem complicações.",
      icon: <SettingsIcon className="size-5 stroke-1" />,
    },
    {
      title: "Preço Fixo",
      description: "Sem taxas escondidas ou cobranças extras.",
      icon: <ShieldCheckIcon className="size-5 stroke-1" />,
    },
    {
      title: "Analytics e Relatórios",
      description: "Acompanhe resultados com dados e relatórios completos.",
      icon: <BarChart3Icon className="size-5 stroke-1" />,
    },
    {
      title: "Suporte em Português",
      description: "Atendimento rápido e eficiente no seu idioma.",
      icon: <LanguagesIcon className="size-5 stroke-1" />,
    },
    {
      title: "Confirmações Inteligentes",
      description: "Confirmação automática de recebimento e leitura.",
      icon: <CheckCircle2Icon className="size-5 stroke-1" />,
    },
    {
      title: "Dados 100% Seguros (LGPD)",
      description: "Total conformidade com a LGPD para proteger seus dados.",
      icon: <UserCheckIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
