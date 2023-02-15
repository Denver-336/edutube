export const getData = async () => {
  const url = import.meta.env.VITE_BASE_URL;
  const items = await fetch(url);
  const response: any = await items.json();
  const data = response.data.results
  // console.log(response)
  return data
};