# Data Portfolio Application

## Overview

A web application for data professionals to showcase their projects. Users can sign in, add, and manage their data projects.

## Features

### Implemented

*   **Authentication:**
    *   Sign in with email and password.
    *   Sign in with Google.
    *   Sign out.
    *   Protected routes using middleware.
*   **Dashboard:**
    *   Display a welcome message to the user.
    *   Show a list of the user's data projects fetched from Firestore.
    *   Include a button to add a new project.
*   **Project Creation:**
    *   A form to add a new project with fields for title, description, and technologies.
    *   Server Action to handle form submission and save data to Firestore.
*   **Project Details:**
    *   A page to display the details of a single project.
*   **Data Storage:**
    *   Use Firestore to store and manage project data.
*   **CRUD Operations:**
    *   Full Create, Read, Update, and Delete functionality for projects.
*   **UI Components:**
    *   Created a reusable `Badge` component for displaying tags and labels.
*   **Bug Fixes:**
    *   Resolved a styling issue on the authentication pages by importing the global stylesheet.
    *   Corrected `useFormStatus` and `useActionState` hook usage to prevent runtime errors.

## Completed: Visual Design Enhancement

*   **Modern Color Palette:**
    *   Updated `tailwind.config.ts` with a vibrant and energetic color palette.
*   **Global Styles:**
    *   Applied a subtle noise texture to the background in `globals.css` for a premium feel.
*   **Component Redesign:**
    *   Redesigned the main page and other components to use the new styles, with improved layout, spacing, and typography.
*   **Iconography:**
    *   Incorporated `lucide-react` icons to enhance user understanding and navigation.
*   **Interactive Elements:**
    *   Add hover effects and shadows to buttons and cards to create a sense of depth and interactivity.
