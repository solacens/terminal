import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const username = (config.social as any).github;

  if (username) {
    const { data } = await axios.get(
      `https://api.github.com/users/${username}/repos`,
    );

    return data;
  }

  return [];
};

export const getBanner = async () => {
  const { data } = await axios.get(config.bannerUrl);

  return data;
}

export const getBio = async () => {
  const { data } = await axios.get(config.bioUrl);

  return data;
};

export const getWeather = async (city: string) => {
  const { data } = await axios.get(`https://wttr.in/${city}?ATm`);

  return data;
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');

  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};
