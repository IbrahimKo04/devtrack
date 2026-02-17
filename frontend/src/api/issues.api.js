import { apiRequest } from "./client";

export const getIssues = () => apiRequest("/issues");

export const createIssue = (data) =>
  apiRequest("/issues", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const updateIssue = (id, data) =>
  apiRequest(`/issues/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

export const deleteIssue = (id) =>
  apiRequest(`/issues/${id}`, {
    method: "DELETE",
  });
