import { type VariantProps } from "class-variance-authority";
import { ArrowRightIcon } from "lucide-react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import Github from "../../logos/github";
import { Badge } from "../../ui/badge";
import { Button, buttonVariants } from "../../ui/button";
import Glow from "../../ui/glow";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Screenshot from "../../ui/screenshot";
import { Section } from "../../ui/section";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps {
  title?: ReactNode;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function Hero({
  title = (
    <>
      Cada falta custa{" "}
      <span style={{ color: "var(--brand)" }}>R$ 300 em média</span>
    </>
  ),
  description = "WhatsApp automático para reduzir faltas em consultas médicas e aumentar a retenção de pacientes",
  mockup = (
    <Screenshot
      srcLight="/dashboard-notly.png"
      srcDark="/dashboard-notly.png"
      alt="Notly App Dashboard"
      width={1248}
      height={765}
      className="w-full"
    />
  ),
  badge = (
    <div
      className="animate-appear inline-flex items-center gap-3 rounded-full bg-muted/60 px-5 py-2 shadow-md border border-border backdrop-blur-md whitespace-nowrap max-w-full overflow-x-auto"
      style={{ maxWidth: 520 }}
    >
      <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground whitespace-nowrap">
        <ArrowRightIcon className="size-4 text-brand" />
        Teste grátis por 14 dias
        <span className="hidden sm:inline text-xs text-muted-foreground/70 ml-1 whitespace-nowrap">Sem cartão de crédito</span>
      </span>
      <a
        href={siteConfig.getStartedUrl}
        className="ml-3 rounded-full bg-brand px-4 py-1.5 text-xs font-semibold text-white shadow transition hover:bg-brand-foreground whitespace-nowrap"
      >
        Cadastrar-se
      </a>
    </div>
  ),
  buttons = [
    {
      href: siteConfig.getStartedUrl,
      text: "Começar agora gratuitamente",
      variant: "default",
    },
  ],
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {badge !== false && badge}
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  size="lg"
                  asChild
                >
                  <a href={button.href}>
                    {button.icon}
                    {button.text}
                    {button.iconRight}
                  </a>
                </Button>
              ))}
            </div>
          )}
          {mockup !== false && (
            <div className="relative w-full pt-12">
              <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                <Mockup
                  type="responsive"
                  className="bg-background/90 w-full rounded-xl border-0"
                >
                  {mockup}
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
    
  );
}
