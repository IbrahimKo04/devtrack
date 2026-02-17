import { apiRequest } from "./client";

export const getReleases = () => apiRequest("/releases");

export const createRelease = (data) =>
  apiRequest("/releases", {
    method: "POST",
    body: JSON.stringify(data),
  });
