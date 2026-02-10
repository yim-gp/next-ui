'use client';

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Alert, Avatar, Badge, BreadcrumbItem, Breadcrumbs, Button, Calendar, Card, CardBody } from "@heroui/react";
import { button as buttonStyles } from "@heroui/theme";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}

      >
        <h1 className="text-3xl font-bold">Components</h1>
      </motion.div>
      <div className="grid gap-4 mt-4
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="dark:bg-zinc-950 border dark:border-slate-700 border-slate-200 rounded-2xl shadow-md p-6 mb-6"
        >
          <h2 className="text-2xl font-semibold mb-2">Accordion</h2>
          <Accordion>
            <AccordionItem className="border-slate-200 h-10" key="1" aria-label="Accordion 1" title="Accordion 1">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
            </AccordionItem>
            <AccordionItem className="border-slate-200 h-10" key="2" aria-label="Accordion 2" title="Accordion 2">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
            </AccordionItem>
            <AccordionItem className="border-slate-200 h-10" key="3" aria-label="Accordion 3" title="Accordion 3">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
            </AccordionItem>
          </Accordion>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="dark:bg-zinc-950 border dark:border-slate-700 border-slate-200 rounded-2xl shadow-md p-6 mb-6"
        >
          <h2 className="text-2xl font-semibold mb-2">Alert</h2>
          <div className="flex items-center justify-center w-full">
            <Alert description={"Thanks for subscribing to our newsletter!"} title={"This is an alert"} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="dark:bg-zinc-950 border dark:border-slate-700 border-slate-200 rounded-2xl shadow-md p-6 mb-6"
        >
          <h2 className="text-2xl font-semibold mb-2">Avatar</h2>
          <div className="flex gap-3 items-center">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar name="Junior" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <Avatar name="Jane" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
            <Avatar name="Joe" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="dark:bg-zinc-950 border dark:border-slate-700 border-slate-200 rounded-2xl shadow-md p-6 mb-6"
        >
          <h2 className="text-2xl font-semibold mb-2">Breadcrumbs</h2>
          <div className="flex gap-3 items-center">
            <Breadcrumbs>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Music</BreadcrumbItem>
              <BreadcrumbItem>Artist</BreadcrumbItem>
              <BreadcrumbItem>Album</BreadcrumbItem>
              <BreadcrumbItem>Song</BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="dark:bg-zinc-950 border dark:border-slate-700 border-slate-200 rounded-2xl shadow-md p-6 mb-6"
        >
          <h2 className="text-2xl font-semibold mb-2">Button</h2>
          <Button className='border rounded-4xl bg-blue-400' disableAnimation>Button</Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="dark:bg-zinc-950 border dark:border-slate-700 border-slate-200 rounded-2xl shadow-md p-6 mb-6"
        >
          <h2 className="text-2xl font-semibold mb-2">Calendar</h2>
          <div className="flex gap-x-4">
            <Calendar aria-label="Date (No Selection)" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="dark:bg-zinc-950 border dark:border-slate-700 border-slate-200 rounded-2xl shadow-md p-6 mb-6"
        >
          <h2 className="text-2xl font-semibold mb-2">Card</h2>
          <Card>
            <CardBody>
              <p>Make beautiful websites regardless of your design experience.</p>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
