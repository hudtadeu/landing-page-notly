import { User, Users } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";
import { Section } from "../../ui/section";
import { Badge } from "../../ui/badge"; // import Badge

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Escolha o plano ideal para sua clínica.",
  description = "Planos flexíveis para todos os tamanhos de operação. Comece gratuitamente e evolua conforme sua necessidade.",
  plans = [
    {
      name: "Básico",
      description: "Perfeito para começar",
      price: 99,
      priceNote: "R$ 99/mês",
      cta: {
        variant: "glow",
        label: "Comece agora gratuitamente",
        href: "/docs/getting-started/introduction",
      },
      features: [
        "200 mensagens WhatsApp/mês incluídas",
        "Até 100 pacientes",
        "Confirmações e lembretes automáticos",
        "Agenda inteligente",
        "Dashboard com métricas",
        "Suporte por email",
      ],
      variant: "default",
      className: "",
    },
    {
      name: "Profissional",
      icon: <User className="size-4" />,
      description: "Mais popular para clínicas",
      price: 199,
      priceNote: "R$ 199/mês",
      cta: {
        variant: "default",
        label: "Assinar Agora",
        href: "", // Atualize para a URL desejada
      },
      features: [
        "500 mensagens WhatsApp/mês incluídas",
        "Pacientes ilimitados",
        "Tudo do Básico +",
        "Analytics avançado",
        "Previsão de no-show",
        "Relatórios personalizados",
        "Suporte prioritário",
      ],
      variant: "glow-brand",
      className: "border-2 border-primary shadow-lg relative before:content-['Mais_Popular'] before:absolute before:-top-6 before:left-1/2 before:-translate-x-1/2 before:bg-primary before:text-white before:px-3 before:py-1 before:rounded-full before:text-xs before:font-semibold",
    },
    {
      name: "Premium",
      icon: <Users className="size-4" />,
      description: "Para grandes operações",
      price: 299,
      priceNote: "R$ 299/mês",
      cta: {
        variant: "default",
        label: "Assinar Agora",
        href: "", // Atualize para a URL desejada
      },
      features: [
        "1500 mensagens WhatsApp/mês incluídas",
        "Tudo do Profissional +",
        "Contas multi-usuário",
        "Integração Google Calendar",
        "API personalizada",
        "Página de agendamento pública",
        "Suporte dedicado 24/7",
      ],
      variant: "glow",
      className: "",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {/* Badge acima do título */}
            <Badge>
              escolha seu plano
            </Badge>
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
