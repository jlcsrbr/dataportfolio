'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { createProject } from '@/app/actions/projects';
import { ArrowLeft } from 'lucide-react';

const initialState: { errors?: { title?: string[] | undefined; description?: string[] | undefined; technologies?: string[] | undefined; }; message?: string | null; } = {
  message: null,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} size="lg">
      {pending ? 'Adding Project...' : 'Add Project'}
    </Button>
  );
}

export default function NewProject() {
  const [state, dispatch] = useActionState(createProject, initialState);

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
            <CardTitle className="text-3xl font-bold">Add New Project</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <form action={dispatch} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input id="title" name="title" placeholder="e.g., My Awesome Project" required />
              {state.errors?.title && (
                <p className="text-sm text-red-500 pt-1">{state.errors.title.join(', ')}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Project Description</Label>
              <Textarea id="description" name="description" placeholder="Describe your project in a few words..." required className="min-h-[120px]" />
               {state.errors?.description && (
                <p className="text-sm text-red-500 pt-1">{state.errors.description.join(', ')}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="technologies">Technologies Used</Label>
              <Input id="technologies" name="technologies" placeholder="e.g., Next.js, Firebase, Tailwind CSS" required />
               {state.errors?.technologies && (
                <p className="text-sm text-red-500 pt-1">{state.errors.technologies.join(', ')}</p>
              )}
            </div>
            {state.message && (
              <p className="text-sm text-red-500 pt-1">{state.message}</p>
            )}
            <div className="flex justify-end gap-4 pt-4">
              <SubmitButton />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
