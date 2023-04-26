import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./lib/sanity/schemas";
import {
  projectId,
  dataset,
  previewSecretId
} from "./lib/sanity/config";
import settings from "./lib/sanity/schemas/settings";
import {
  pageStructure,
  singletonPlugin
} from "./lib/sanity/plugins/settings";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { table } from "@sanity/table";
import { codeInput } from "@sanity/code-input";
import services from "./lib/sanity/schemas/services";

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = ["post"];
console.log(projectId);

export default defineConfig({
  name: "default",
  title: "Stablo Template",
  basePath: "/studio",
  projectId: projectId || "que4q559",  
  dataset: dataset,

  plugins: [
    deskTool({
      structure: pageStructure([settings, services])
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      // defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    singletonPlugin(["settings", "services"]),
    visionTool(),
    unsplashImageAsset(),
    table(),
    codeInput()
  ],

  schema: {
    types: schemaTypes
  }
});
