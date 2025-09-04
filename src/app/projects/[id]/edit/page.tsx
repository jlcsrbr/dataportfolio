import { firestore } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { updateProject } from '@/app/actions/projects';

async function getProject(id: string) {
  const docRef = doc(firestore, 'projects', id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    notFound();
  }

  return { id: docSnap.id, ...docSnap.data() };
}

export default async function EditProject({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);

  if (!project) {
    return notFound();
  }

  const updateProjectWithId = updateProject.bind(null, project.id);

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <Card className="w-full max-w-lg mx-4 bg-secondary shadow-card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Edit Project</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={updateProjectWithId} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-300">Title</label>
              <Input id="title" name="title" defaultValue={project.title} className="bg-input mt-1 block w-full" />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300">Description</label>
              <Input id="description" name="description" defaultValue={project.description} className="bg-input mt-1 block w-full" />
            </div>
            <div>
              <label htmlFor="technologies" className="block text-sm font-medium text-gray-300">Technologies</label>
              <Input id="technologies" name="technologies" defaultValue={project.technologies} className="bg-input mt-1 block w-full" />
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="bg-accent hover:bg-opacity-80">Update Project</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
