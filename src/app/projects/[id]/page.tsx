import { firestore } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { deleteProject } from '@/app/actions/projects';

async function getProject(id: string) {
  const docRef = doc(firestore, 'projects', id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    notFound();
  }

  return { id: docSnap.id, ...docSnap.data() };
}

export default async function ProjectDetails({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <Card className="w-full max-w-2xl mx-4 bg-secondary shadow-card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">{project.title}</CardTitle>
          <CardDescription className="text-gray-400">{project.technologies}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-white">{project.description}</p>
          <div className="flex justify-end mt-4 gap-4">
            <Link href={`/`}>
                <Button className="bg-accent hover:bg-opacity-80">Go Back</Button>
            </Link>
            <Link href={`/projects/${project.id}/edit`}>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">Edit</Button>
            </Link>
            <form action={async () => {
              'use server';
              await deleteProject(project.id);
            }}>
              <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white">Delete</Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
