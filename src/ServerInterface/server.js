import entries from "./entries";
let getEntries = () => {
  return entries;
};
let server = {
  fetchEntries: getEntries,
};

export default server;
