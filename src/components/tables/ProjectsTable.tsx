'use client';

import { projectsData } from "@/data/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/context/i18n";

export const ProjectsTable = () => {
  const { t } = useI18n();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.map((project) => (
        <Card key={project.id} className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{project.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </CardContent>
          <div className="p-6 pt-0 flex justify-between items-center">
            <span className="text-sm text-gray-500">{project.year}</span>
            <Button asChild variant="outline" size="sm">
              <Link href={`/projects/${project.id}`}>
                {t("actions.viewProject")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};
