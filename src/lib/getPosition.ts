type PositionType =
  | { success: true; lat: number; lon: number }
  | { success: false; reason: string };

/**
 * Gets the user's current geolocation coordinates.
 * @returns An object representing the result of the geolocation attempt.
 *
 * It can be one of two types:
 * - A success object with {`success: true`, `lat:`, `lon:`}.
 * - A failure object with {`success: false`, `reason:` string}.
 */
export const getPosition = async (): Promise<PositionType> => {
  if (!('geolocation' in navigator)) {
    return {
      success: false,
      reason: 'Geolocation is not supported.',
    };
  }
  try {
    const position = await new Promise<GeolocationPosition>((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });

    return {
      success: true,
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
  } catch (error) {
    let reason = 'unknown error occurred.';

    if (error instanceof GeolocationPositionError) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          reason = 'Permission denied.';
          break;
        case error.POSITION_UNAVAILABLE:
          reason = 'Position unavailable.';
          break;
        case error.TIMEOUT:
          reason = 'Request timed out.';
          break;
      }
    } else if (error instanceof Error) {
      reason = error.message;
    }

    return { success: false, reason };
  }
};
