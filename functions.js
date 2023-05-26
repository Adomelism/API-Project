export function getUrlParams(param) {
    const queryParams = location.search;
    const urlParams = new URLSearchParams(queryParams);
    const paramValue = urlParams.get(param);
  
    return paramValue;
  }

  export async function fetchData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }