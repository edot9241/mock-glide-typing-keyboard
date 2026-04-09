import { serve } from "bun";
import index from "../index.html";

const startDevServer = serve({
  routes: {
    "/*": index,
  },

  development: {
    // Enable browser hot reloading
    hmr: true,
    // Echo console logs from the browser to the startDevServer
    console: true,
  },
});

console.log(`Dev server running at ${startDevServer.url}`);
