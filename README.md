## 📁 README.md

### Minimalist E-commerce Product Catalog

This project is a modern, full-stack e-commerce catalog application built with **Next.js 16 (App Router)** and **TypeScript**. It serves as a robust demonstration of different rendering strategies—Static Site Generation (SSG), Incremental Static Regeneration (ISR), and Server-Side Rendering (SSR)—tailored for optimal performance in various parts of an application. The entire platform is built with a focus on speed, security, and maintainability.

### 🚀 Live Application URL

Experience the optimized performance directly:
[shop.priyanshugupta.space](https://shop.priyanshugupta.space)

This application is self-hosted on a Google Cloud VM instance, utilizing Nginx and PM2 for efficient process management and Python Certbot for robust HTTPS security.

-----

### ✨ Core Technologies & Features

  * **Framework:** Next.js 16 (App Router)
  * **Language:** TypeScript 
  * **Styling:** Tailwind CSS
  * **Database:** MongoDB (Managed via dedicated URI)
  * **Authentication:** Clerk (Simple, robust key-based authentication for Admin routes)
  * **State Management:** Zustand (for client-side cart and UI state)
  * **Form Management:** React Hook Form with Zod validation

### ⚙️ Rendering Strategy Overview

| Route | Strategy Used | Technical Implementation | Rationale |
| :--- | :--- | :--- | :--- |
| **`/` (Home Page)** | **Static Site Generation (SSG)** | Next.js Server Component with cached data fetch (default behavior). | Maximizes speed and time-to-first-byte (TTFB) for frequently viewed, public pages. |
| **`/products/[id]` (Detail Page)** | **Incremental Static Regeneration (ISR)** | Server Component with `export const revalidate = 60;`/page.tsx]. | Serves a highly performant static page that regenerates in the background every 60 seconds to ensure data (like stock) is updated. |
| **`/dashboard` (Inventory)** | **Server-Side Rendering (SSR)** | Server Component with `export const dynamic = "force-dynamic";`. | Ensures that sensitive inventory metrics and stock levels are **always fresh** on every request for administrative accuracy. |
| **`/admin` (Management)** | **Client-Side Rendering (CSR)** | Client Component (`"use client"`) with form logic and dedicated `fetch` calls to backend API routes. | Provides a highly interactive and dynamic experience essential for administrative data entry. |

### 🛠️ Local Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/priyanshuguptadev/shop
    cd shop
    ```

2.  **Install dependencies:**

    ```bash
    npm i
    ```

3.  **Set up Environment Variables:**
    Create a file named `.env.local` based on the provided `.env.example`.

      * **MongoDB:** Ensure `MONGO_DB_URI` points to your local or hosted MongoDB instance.
      * **Clerk:** Register your application with Clerk, obtain your keys, and set the four required `CLERK_` environment variables for authentication.

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

The application will be accessible at [http://localhost:3000](http://localhost:3000).
