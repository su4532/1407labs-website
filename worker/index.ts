// Serves the built site from ./dist and sends www.1407labs.com to the apex domain.
interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "www.1407labs.com") {
      url.hostname = "1407labs.com";
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
