require("url");
const myUrl = new URL(
  "https://google.com:8000/index.php?q=someword&id=100&name=John&s=1&s=2"
);

const options = {
  href: myUrl.href,
  toString: myUrl.toString(),
  host: myUrl.host,
  hostname: myUrl.hostname,
  pathname: myUrl.pathname,
  search: myUrl.search,
  searchParams: "Search Params Object", // myUrl.searchParams,
  "searchParams.get": myUrl.searchParams.get("id"),
  "searchParams.has": myUrl.searchParams.has("q"),
  "searchParams.getAll": myUrl.searchParams.getAll("s"),
};

console.log("Append Param");
myUrl.searchParams.append("abc", "123");
console.log("Set Param, Makes Sure Not Duplicated");
myUrl.searchParams.set("abc", "123");
console.log("Loop Params");
myUrl.searchParams.forEach((value, name) => {
  let row = {};
  row[name] = value;
  console.table(row);
});

module.exports = options;
