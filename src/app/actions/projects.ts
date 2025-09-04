'use server';

import { firestore } from '@/lib/firebase';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { redirect } from 'next/navigation';

export async function deleteProject(id: string) {
  const docRef = doc(firestore, 'projects', id);
  await deleteDoc(docRef);
  redirect('/');
}

export async function updateProject(id: string, formData: FormData) {
    const docRef = doc(firestore, 'projects', id);
    await updateDoc(docRef, {
        title: formData.get('title'),
        description: formData.get('description'),
        technologies: formData.get('technologies'),
    });
    redirect(`/projects/${id}`);
}
