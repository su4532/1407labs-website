// Serves the static site from ./public and sends www.1407labs.com to the apex domain.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "www.1407labs.com") {
      url.hostname = "1407labs.com";
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
