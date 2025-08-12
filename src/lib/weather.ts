interface WeatherData {
  current: {
    weather_code: number;
  };
}

interface ImageResponse {
  url: string;
  alt: string;
}

export const WEATHER_DEFAULT_IMAGE = {
  url: '/star.svg',
  alt: 'star icon',
} as const;

export async function getTokyoWeatherImage(): Promise<ImageResponse> {
  try {
    const response = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=35.6762&longitude=139.6503&current=weather_code&timezone=Asia/Tokyo',
      { next: { revalidate: 600 } }, // 10分間キャッシュ
    );

    if (!response.ok) {
      console.error('Failed to fetch weather:', response.statusText);
      return WEATHER_DEFAULT_IMAGE;
    }

    const data: WeatherData = await response.json();
    return getWeatherIcon(data.current.weather_code);
  } catch (error) {
    console.error('Failed to fetch weather:', error);
    return WEATHER_DEFAULT_IMAGE;
  }
}

function getWeatherIcon(weatherCode: number): ImageResponse {
  // 晴れ
  if (weatherCode === 0) {
    return {
      url: '/smiling-sun.svg',
      alt: 'smiling sun icon',
    };
  }

  // 曇り
  if (weatherCode >= 1 && weatherCode <= 3) {
    return {
      url: '/cloud.svg',
      alt: 'cloud icon',
    };
  }

  // 雨
  if (weatherCode >= 51 && weatherCode <= 67) {
    return {
      url: '/cloud-with-rain.svg',
      alt: 'cloud with rain icon',
    };
  }

  // 　雪
  if (weatherCode >= 71 && weatherCode <= 77) {
    return {
      url: '/snowman.svg',
      alt: 'snowman icon',
    };
  }

  return WEATHER_DEFAULT_IMAGE; // デフォルト
}
