export default async function handler(request, context) {
  // You need this if you are calling this from the browser
  // to handle CORS preflight stuff

  let corsOriginHeader = "";
  const origin = request.headers.get("origin");

  if (origin && origin.match("https://(?:[0-9a-z]{24}--)?sspa-shop-root-mt-p13n.netlify.app")) {
    corsOriginHeader = origin;
    const response = await context.next();
    response.headers.set("Access-Control-Allow-Origin", corsOriginHeader);
    return response;
  }

  /*return new Response(host, {
    headers: { "Access-Control-Allow-Origin": corsOriginHeader }
  })*/
}
