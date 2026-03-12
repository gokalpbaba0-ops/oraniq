const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS });
}

export async function onRequestGet(context) {
  try {
    const apiKey = context.env.API_FOOTBALL_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API_FOOTBALL_KEY not set' }), {
        status: 500, headers: { 'Content-Type': 'application/json', ...CORS }
      });
    }

    const url = new URL(context.request.url);
    const pathParts = url.pathname.split('/api/odds/');
    const apiPath = pathParts[1] || '';
    const apiUrl = `https://v3.football.api-sports.io/${apiPath}${url.search}`;

    const resp = await fetch(apiUrl, {
      headers: {
        'x-apisports-key': apiKey,
        'Accept': 'application/json',
      }
    });

    const data = await resp.json();

    return new Response(JSON.stringify(data), {
      status: resp.status,
      headers: { 'Content-Type': 'application/json', ...CORS }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...CORS }
    });
  }
}
