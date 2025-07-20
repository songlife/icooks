import express, { type Express } from "express";
import path from "path";
import fs from "fs";

export function setupNextJSServing(app: Express) {
  // In development mode, we only handle API routes
  // Next.js dev server handles the frontend on port 3000
  if (process.env.NODE_ENV === "development") {
    console.log("Development mode: Express serving API only, Next.js on port 3000");
    return;
  }

  // In production, serve Next.js static files
  const nextStaticPath = path.resolve(process.cwd(), ".next", "static");
  const nextPublicPath = path.resolve(process.cwd(), "public");
  const nextOutPath = path.resolve(process.cwd(), "out");

  if (fs.existsSync(nextOutPath)) {
    // Next.js export mode
    app.use(express.static(nextOutPath));
    app.use("*", (_req, res) => {
      res.sendFile(path.resolve(nextOutPath, "index.html"));
    });
  } else if (fs.existsSync(nextStaticPath)) {
    // Next.js build mode
    app.use("/_next/static", express.static(nextStaticPath));
    if (fs.existsSync(nextPublicPath)) {
      app.use(express.static(nextPublicPath));
    }
  }
}