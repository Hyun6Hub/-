import { promises as fsPrommises } from "fs";

export const getrealTime = () => {
  const path = "data/best_all.json";
  const books = fsPrommises
    .readFile(path, "utf-8")

    .then((data) => {
      const jsonData = JSON.parse(data);
      return jsonData.readTime;
    })
    .catch();
  return books;
};
