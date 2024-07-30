import { type NextRequest, } from 'next/server'
import { getWeatherData } from '@/lib/contextUtils';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  try {
    const res = await getWeatherData({lat, lon});

    return Response.json({
      status: 200,
      data: res,
    });

  } catch (error) {
    console.error('This was an error:', error);
    return Response.json({
      status: 500,
      error: error,
    });
  }
}