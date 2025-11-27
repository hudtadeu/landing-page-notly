import { siteConfig } from "@/config/site";

import { Section } from "../../ui/section";

interface StatItemProps {
  value: string | number;
  suffix?: string;
  description?: string;
}

interface StatsProps {
  items?: StatItemProps[] | false;
  className?: string;
}

export default function Stats({
  items = [
    {
      value: "2.500",
      suffix: "+",
      description: "Profissionais ativos",
    },
    {
      value: "850",
      suffix: "K+",
      description: "Mensagens enviadas",
    },
    {
      value: "92",
      suffix: "%",
      description: "Taxa de confirmação",
    },
    {
      value: "82",
      suffix: "%",
      description: "Redução de faltas",
    },
  ],
  className,
}: StatsProps) {
  return (
    <Section className={className}>
      <div className="container mx-auto max-w-[960px]">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold sm:text-3xl md:text-3xl">
            Mais de 2.500 profissionais confiam no Notly
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Resultados mensuráveis todos os dias
          </p>
        </div>
        {items !== false && items.length > 0 && (
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-3 text-left"
              >
                <div className="flex items-baseline gap-2">
                  <div className="from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_var(--brand-foreground)] transition-all duration-300 sm:text-5xl md:text-6xl">
                    {item.value}
                  </div>
                  {item.suffix && (
                    <div className="text-brand text-2xl font-semibold">
                      {item.suffix}
                    </div>
                  )}
                </div>
                {item.description && (
                  <div className="text-muted-foreground text-sm font-semibold text-pretty">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        <div className="mt-8 text-center text-base font-semibold text-muted-foreground">
          Mais de R$ 12 milhões em receita recuperada pelos nossos clientes
        </div>
      </div>
    </Section>
  );
}
