import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],
  output: "static",
  redirects: {
    "/admin": "https://app.pagescms.org/repositori-compred",
  },
});
