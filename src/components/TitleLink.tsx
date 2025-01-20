import type { ReactNode } from "react";

export default function FadeIn({ children, color, href }: { children: ReactNode, color: string, href: string }) {
  return (
    <a href={href} target={href.startsWith("https://") ? "_blank" : "_self"} className="relative group h-auto w-auto py-0.5 hover:cursor-pointer inline">
      <span className="relative z-10">
        {children}
      </span>
      <span
        className="absolute bottom-0 left-0 right-0 opacity-50 h-1 duration-200 group-hover:h-full"
        style={{ backgroundColor: color }}
      ></span>
    </a>
  )
}