# Project Blueprint: Julio Bobadilla - Data Analytics & Data Science Portfolio

## Overview

This document outlines the development plan and feature set for a personal portfolio website for Julio Bobadilla, a Data Analyst and Data Scientist. The goal is to create a production-ready application that showcases his projects, skills, and expertise using a modern, performant, and maintainable tech stack.

The application now features a modern, responsive dashboard layout built with `react-grid-layout`. This dashboard will serve as the main interface for showcasing projects and data visualizations.

## Core Technologies

*   **Framework**: Next.js 14+ (App Router)
*   **Language**: TypeScript
*   **Styling**: TailwindCSS with shadcn/ui
*   **Layout**: React Grid Layout
*   **Content**: MDX for projects and blog posts
*   **Charts**: react-chartjs-2
*   **Tables**: react-table
*   **Deployment**: Firebase Hosting
*   **Backend**: Firebase (Firestore, Storage, Auth)

---

## Current Plan: Phase 2 - Dashboard Implementation

### Actionable Steps:

1.  **Integrate `react-chartjs-2` and `react-table`**: Replace the placeholder cards with actual data visualizations.
2.  **Create dynamic data fetching**: Fetch project data from a data source (e.g., a JSON file, or later, a database) to populate the dashboard.
3.  **Implement MDX for project details**: Create a system for rendering detailed project pages using MDX.
4.  **Add Authentication**: Implement user authentication using Firebase Auth to protect the dashboard.
5.  **Set up Firestore**: Use Firestore to store and manage project data.

---

## Completed: Phase 1 - Project Setup & Foundation

*   **Initialized Project**: Set up the initial Next.js application with TypeScript and Tailwind CSS.
*   **Installed Core Dependencies**:
    *   `shadcn/ui` and its dependencies (`lucide-react`).
    *   `react-grid-layout` for the dashboard layout.
*   **Configured `shadcn/ui`**: Initialized `shadcn/ui` to set up the component library, styles, and utilities.
*   **Established Project Structure**:
    *   Restructured the project to use a `src` directory.
    *   Created a `(site)` route group for the main application.
    *   Moved global styles to a `styles` directory.
*   **Set Up Basic Layout**:
    *   Created a root layout and a site-specific layout.
    *   Implemented a modern dashboard design using `react-grid-layout`.
    *   Added `Card` and `Button` components from `shadcn/ui`.
*   **Added Firebase to MCP**: Added the firebase server to the `.idx/mcp.json` file.