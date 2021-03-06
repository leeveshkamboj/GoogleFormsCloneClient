const config = require("./config");

const generateQues = (questions) => {
  return [{ Header: "SNo.", accessor: "sno" }].concat(
    questions.map((val, i) => {
      return {
        Header: val.question,
        accessor: `col${i}`,
      };
    })
  );
};

const generateResps = (responses, questions) => {
  return responses.map((val, no) => {
    var resps = { sno: no + 1 };
    val.map((re, i) => {
      if (config.quetionTypesWithOptions.includes(questions[i].type)) {
        return (resps[`col${i}`] = questions[i].options[re]);
      }
      return (resps[`col${i}`] = re);
    });
    return resps;
  });
};

module.exports = { generateQues, generateResps };
