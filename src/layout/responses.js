import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getResponses } from "../axios";
import ResponseTable from "../components/responseTable";
import Loading from "../components/loading";
import { generateQues, generateResps } from "../utils";

export default function Responses() {
  var { formId } = useParams();
  const [questions, setQuestions] = useState();
  const [responses, setResponses] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    if (formId) {
      getResponses(formId)
        .then((res) => {
          setLoading(false);
          setQuestions(generateQues(res.data.questions));
          setResponses(generateResps(res.data.responses, res.data.questions));
        })
        .catch((err) => {
          setLoading(false);
          alert(err.response.data.error);
        });
    }
  }, [formId]);
  return (
    <>
      {loading && <Loading />}
      {questions && responses && (
        <div className="m-20">
          <ResponseTable questions={questions} responses={responses} />
        </div>
      )}
    </>
  );
}
