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
import activities from "./lib/sanity/schemas/activities";
import about from "./lib/sanity/schemas/about";
import contact from "./lib/sanity/schemas/contact";

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = ["post"];

const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'ro', title: 'Romanian' },
]

const baseLanguage = supportedLanguages.find(l => l.isDefault)

export default defineConfig({
  name: "default",
  title: "Parish Website Studio",
  basePath: "/studio",
  projectId: projectId || "que4q559",  
  dataset: dataset,

  plugins: [
    deskTool({
      structure: pageStructure([settings, about, contact, services, activities])
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      // defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    singletonPlugin(["settings", "about", "contact", "services", "activities"]),
    visionTool(),
    unsplashImageAsset(),
    table(),
    codeInput()
  ],

  schema: {
    types: schemaTypes
  }
});
