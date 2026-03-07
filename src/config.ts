import profile from "./data/profile.json";

// Import experience files
const experienceModules = import.meta.glob("./data/experience/*.json", { eager: true });
const experience = Object.values(experienceModules)
  .map((m: any) => m.default)
  .sort((a, b) => a.order - b.order);

// Import project files
const projectModules = import.meta.glob("./data/projects/*.json", { eager: true });
const projects = Object.values(projectModules)
  .map((m: any) => m.default)
  .sort((a, b) => a.order - b.order);

// Import education files
const educationModules = import.meta.glob("./data/education/*.json", { eager: true });
const education = Object.values(educationModules)
  .map((m: any) => m.default)
  .sort((a, b) => a.order - b.order);

export const siteConfig = {
  ...profile,
  // Convert markdown line breaks to HTML for aboutMe
  aboutMe: profile.aboutMe.replace(/\n\n/g, "<br><br>"),

  // Design tokens (not editable via CMS)
  accentColor: "#4A5D3A",
  highlightColor: "#AD6D5F",

  // Dynamic collections
  experience,
  projects,
  education,
};
