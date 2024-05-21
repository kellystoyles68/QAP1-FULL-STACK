import { compareAsc, compareDesc, format } from "date-fns";

format(new Date(2023, 1, 11), "yyyy-MM-dd");

const dates = [
  new Date(1995, 6, 3),
  new Date(1987, 1, 11),
  new Date(1989, 6, 19),
];

//sort dates in ascending order
dates.sort(compareAsc);
console.log(dates.map((date) => format(date, "yyyy-MM-dd")));

//sort dates in descending order
dates.sort(compareDesc);
console.log(dates.map((date) => format(date, "yyyy-MM-dd")));
