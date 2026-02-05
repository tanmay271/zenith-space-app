import axios from 'axios';

const getStrapiURL = (path = '') => {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${path}`;
};

export async function getDestinations() {
  const url = getStrapiURL('/api/destinations?populate=*');
  
  try {
    const response = await axios.get(url);
    const { data } = response.data;
    
    // Strapi v5 Flattening Logic
    const destinations = data.map(item => ({
      id: item.id,
      documentId: item.documentId,
      ...item
    }));

    return destinations;
  } catch (error) {
    console.error("Error fetching destinations:", error);
    return [];
  }
}

export function getStrapiMedia(url) {
  if (url == null) {
    return null;
  }
  if (url.startsWith('http') || url.startsWith('//')) {
    return url;
  }
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${url}`;
}
