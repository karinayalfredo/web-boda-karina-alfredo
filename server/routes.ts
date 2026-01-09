import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Minimal API route just to verify server is running
  app.get(api.status.get.path, (req, res) => {
    res.json({ status: "online" });
  });

  return httpServer;
}
