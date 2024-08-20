import axios from "axios";

export const fetchApi = async (query, page = 1) => {
  const response = (
    await axios.get("https://pixabay.com/api/", {
      params: {
        key: "43934204-71edb5ce863d740adbd705f51",
        q: query,
        orientation: "horizontal",
        page: page,
        per_page: 20,
      },
    })
  ).data;

  return {
    hits: response.hits,
    totalHits: response.totalHits,
  };
};
