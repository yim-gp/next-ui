'use client';
import { Link, Snippet, Code, Card, CardBody } from "@heroui/react";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>

      <div className="grid gap-4
                    grid-cols-1
                    sm:grid-cols-1
                    lg:grid-cols-2
                    xl:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="dark:bg-zinc-950 border dark:border-slate-700 border-slate-200 rounded-2xl shadow-md p-6 mb-6"
          >
            <h2 className="text-2xl font-semibold mb-2">Welcome 👋</h2>
            <p className="text-slate-600">
              Footer is placed directly under children inside the main content
              column.
            </p>
          </motion.div>
        ))}
      </div>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
        </div>
        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing <Code color="primary">src/app/page.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
    </>
  );
}
