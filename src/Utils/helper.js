export default function calculate(a, b, signal) {
  if (signal === "+") {
    return ((a * 100 + b * 100) / 100).toFixed(2);
  } else {
    return ((a * 100 - b * 100) / 100).toFixed(2);
  }
}

export const months = [
  { key: "01", value: "01" },
  { key: "02", value: "02" },
  { key: "03", value: "03" },
  { key: "04", value: "04" },
  { key: "05", value: "05" },
  { key: "06", value: "06" },
  { key: "07", value: "07" },
  { key: "08", value: "08" },
  { key: "09", value: "09" },
  { key: "10", value: "10" },
  { key: "11", value: "11" },
  { key: "12", value: "12" }
];
var year = new Date().getFullYear();
export const years = [
  { key: year, value: year },
  { key: year + 1, value: year + 1 },
  { key: year + 2, value: year + 2 },
  { key: year + 3, value: year + 3 },
  { key: year + 4, value: year + 4 }
];
