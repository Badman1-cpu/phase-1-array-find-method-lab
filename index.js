// code your solution here
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
  ];
  
  function superbowlWin(record) {
    for (let i = 0; i < record.length; i++) {
      const result = record[i];
      if (result.result === "W") {
        return result.year;
      }
    }
}