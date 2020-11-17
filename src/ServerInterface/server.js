import entries from "./entries";
let getEntries = () => {
  return entries;
};

let delEntries = (biz, place) => {
  for (let i = 0; i < entries.length; i++) {
    if (entries[i].type == biz) {
      entries[i].places.splice(place, 1);
    }
  }
};

let server = {
  fetchEntries: getEntries,
  delete: delEntries,
};

export default server;
