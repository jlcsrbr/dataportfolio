'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillsChart } from "@/components/charts/SkillsChart";
import { ProjectsTable } from "@/components/tables/ProjectsTable";
import { User, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-primary text-white">
      <header className="sticky top-0 z-50 flex items-center justify-between h-20 px-4 md:px-8 bg-primary/80 backdrop-blur-sm border-b border-accent/20">
        <Link href="/">
          <h1 className="text-2xl font-bold text-accent cursor-pointer">Julio Bobadilla</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#projects" className="text-lg font-medium hover:text-accent transition-colors">Projects</Link>
          <Link href="#about" className="text-lg font-medium hover:text-accent transition-colors">About</Link>
          <Link href="#skills" className="text-lg font-medium hover:text-accent transition-colors">Skills</Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center p-8 bg-gradient-to-b from-primary to-secondary/80">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-white animate-glow-text">
              Data Analyst & Data Scientist
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              I transform complex data into clear, actionable insights. Explore my work and see how I can help you make data-driven decisions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="mailto:julio.bobadilla.sample@gmail.com">Contact Me</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12">My Projects</h3>
            <ProjectsTable />
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-4 md:px-8 pb-20">
          <section id="about">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3"><User /> About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  I&apos;m a passionate data analyst and data scientist with a knack for weaving compelling narratives from data. My goal is to help businesses grow by uncovering insights and opportunities hidden within their datasets. I&apos;m always eager to learn new technologies and take on challenging projects.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="skills">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3"><Star /> Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <SkillsChart />
              </CardContent>
            </Card>
          </section>
        </div>

      </main>

      <footer className="flex flex-col items-center justify-center h-24 bg-secondary/80 border-t border-accent/20">
        <p className="text-lg text-gray-400">© 2024 Julio Bobadilla. All rights reserved.</p>
        <p className="text-sm text-gray-500 mt-2">Made with Next.js and Firebase</p>
      </footer>
    </div>
  );
}
