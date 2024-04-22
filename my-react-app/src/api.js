export async function getFood() {
  const res = await fetch("/api/foods")
  if (!res.ok) {
      throw {
          message: "Failed to fetch food", 
          statusText: res.statusText,
          status: res.status
      }
  }
  const data = await res.json()
  return data.vans
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a1a7a9f659msh9992eb70a3b3d88p1ea93ajsn7e7c3f1e9b78',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url,options);
  const data = await response.json();

  return data;
}

const accessKey = 'whsYOuypaVpkrvfwc7pgpolPynK--VUeVeY9gpQiIJQ';
const query = 'chicken pasta';
// const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;

export async function fetchImageUrl(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    const imageUrl = data.results[0].urls.regular;
    return imageUrl;
  } catch (error) {
    console.error('Error fetching image:', error);
    throw error; // Re-throw the error for the caller to handle if needed
  }
}