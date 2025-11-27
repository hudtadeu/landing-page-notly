import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";
import NotlyIcon from "@/components/logos/notly";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = <NotlyIcon />,
  name = "Notly",
  columns = [
    {
      title: "Produto",
      links: [
        { text: "Funcionalidades", href: siteConfig.url + "/funcionalidades" },
        { text: "Preços", href: siteConfig.url + "/precos" },
        { text: "Depoimentos", href: siteConfig.url + "/depoimentos" },
        { text: "Idiomas Suportados", href: siteConfig.url + "/idiomas" },
      ],
    },
    {
      title: "Soluções",
      links: [
        { text: "Criadores de Conteúdo", href: siteConfig.url + "/criadores" },
        { text: "Empresas", href: siteConfig.url + "/empresas" },
        { text: "Educação", href: siteConfig.url + "/educacao" },
        { text: "Corporativo", href: siteConfig.url + "/corporativo" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { text: "Blog", href: siteConfig.url + "/blog" },
        { text: "Guias de Tradução", href: siteConfig.url + "/guias" },
        { text: "Suporte", href: siteConfig.url + "/suporte" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { text: "Sobre Nós", href: siteConfig.url + "/sobre" },
        { text: "Política de Privacidade", href: siteConfig.url + "/privacidade" },
        { text: "Termos & Condições", href: siteConfig.url + "/termos" },
      ],
    },
  ],
  copyright = "© 2025 MAAX Soluções. All rights reserved",
  policies = [
    { text: "Política de Privacidade", href: siteConfig.url + "/privacidade" },
    { text: "Termos & Condições", href: siteConfig.url + "/termos" },
  ],
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                {logo}
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href}>
                  {policy.text}
                </a>
              ))}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
