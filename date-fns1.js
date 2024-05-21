import { format, formatDistance, formatRelative, subDays } from "date-fns";
//const { format, formatDistance, formatRelative, subDays } = require("date-fns");

const date = new Date();
const pastDate = subDays(date, 10);

// Formatting for day of the week
console.log(format(new Date(), "'Today is a' EEEE"));

// Display distance in words
console.log(formatDistance(subDays(new Date(), 3), new Date()));
console.log(formatDistance(subDays(new Date(), 4), new Date()));
console.log(formatDistance(subDays(new Date(), 10), new Date()));

// Format relative dates
console.log(formatRelative(subDays(new Date(), 2), new Date()));
console.log(formatRelative(subDays(new Date(), 1), new Date()));
console.log(formatRelative(subDays(new Date(), 5), new Date()));
console.log(formatRelative(subDays(new Date(), -2), new Date()));
console.log(formatRelative(subDays(new Date(), 10), new Date()));
console.log(formatRelative(subDays(new Date(), -7), new Date()));
