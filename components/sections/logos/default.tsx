"use client";

import { ReactNode } from "react";

import Figma from "../../logos/figma";
import React from "../../logos/react";
import ShadcnUi from "../../logos/shadcn-ui";
import Tailwind from "../../logos/tailwind";
import TypeScript from "../../logos/typescript";
import Logo from "../../ui/logo";
import { Section } from "../../ui/section";

// Adiciona importação dos componentes de item e ícones
import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import {
  ShieldCheckIcon,
  LockIcon,
  CheckCircle2Icon,
  UserCheckIcon,
} from "lucide-react";

interface LogosProps {
  title?: string;
  badge?: ReactNode | false;
  logos?: ReactNode[] | false;
  className?: string;
}

export default function Logos({
  title = "Profissionais e instituições que confiam no Notly",
  logos = [
    <Logo key="figma" image={Figma} name="Figma" />,
    <Logo key="react" image={React} name="React" version="19.2.0" />,
    <Logo
      key="typescript"
      image={TypeScript}
      name="TypeScript"
      version="5.9.3"
    />,
    <Logo
      key="shadcn"
      image={ShadcnUi}
      name="Shadcn/ui"
      version="3.4.2"
      badge="New"
    />,
    <Logo key="tailwind" image={Tailwind} name="Tailwind" version="4.1.14" />,
  ],
  className,
}: LogosProps) {
  // Array de itens de conformidade/segurança
  const items = [
    {
      icon: <ShieldCheckIcon />,
      title: "LGPD",
      description: "Conformidade Total",
    },
    {
      icon: <LockIcon />,
      title: "SSL 256-bit",
      description: "Criptografia Máxima",
    },
    {
      icon: <CheckCircle2Icon />,
      title: "ISO 27001",
      description: "Segurança Certificada",
    },
    {
      icon: <UserCheckIcon />,
      title: "CFM Aprovado",
      description: "Padrão Médico",
    },
  ];

  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
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
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-md font-semibold sm:text-2xl">{title}</h2>
        </div>
        {logos !== false && logos.length > 0 && (
          <div className="relative w-full flex justify-center py-2">
            <div className="w-full max-w-xl overflow-hidden">
              <div
                className="flex gap-8 animate-marquee whitespace-nowrap"
                style={{
                  animation: "marquee 20s linear infinite",
                }}
              >
                {logos}
              </div>
            </div>
            <style jsx>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-marquee {
                will-change: transform;
              }
            `}</style>
          </div>
        )}
      </div>
    </Section>
  );
}
