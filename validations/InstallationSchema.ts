import { z } from "zod";

import { IProgramInstallation } from "@/interfaces";

const InstallationSchema = z.object({
  app_name: z.string().min(2, { message: "App name field is required" }),
  app_url: z.string().min(1, { message: "App Url field is required" }),
  environment: z.enum(["production", "development"]),
  app_debug: z.boolean(),
  app_log_level: z.string(),
  database_connection: z
    .string()
    .min(1, { message: "Database connection is required" }),
  database_hostname: z
    .string()
    .min(1, { message: "Database host is required" }),
  database_port: z.string().min(1, { message: "Database port is required" }),
  database_name: z.string().min(2, { message: "Database name is required" }),
  database_username: z
    .string()
    .min(2, { message: "Database User name is required" }),
  database_password: z
    .string()
    .min(8, { message: "Pasword should contain at least 8 characters" }),
});

type InstallationType = z.infer<typeof InstallationSchema>;
export { InstallationSchema, type InstallationType };

export const defaultValues: IProgramInstallation = {
  app_name: "ocean",
  app_url: "https://ocean.oceanScripts.com",
  app_debug: true,
  app_log_level: "debug",
  database_connection: "mysql",
  database_hostname: "127.0.0.1",
  database_port: "3306",
  environment: "production",
  database_name: "",
  database_username: "",
  database_password: "",
};
