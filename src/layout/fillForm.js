import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { getForm, postResponse } from "../axios";
import FormName from "../components/fillForm/formName";
import Card from "../components/fillForm/card";
import Loading from "../components/loading";

export default function FillForm() {
  var { formId } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState([]);
  useEffect(() => {
    setLoading(true);
    if (formId) {
      getForm(formId)
        .then((res) => {
          setLoading(false);
          setData(res.data);
          setResponse(new Array(res.data.questions.length).fill(null));
        })
        .catch((err) => {
          setLoading(false);
          setError(err.response.data.error);
        });
    }
  }, [formId]);
  const submit = (e) => {
    setLoading(true);
    postResponse(formId, response)
      .then(() => {
        setLoading(false);
        alert("Your response has been recorded.");
      })
      .catch((err) => {
        setLoading(false);
        alert(err.response.data.error);
      });
  };
  return (
    <>
      {loading && <Loading />}
      {data && (
        <>
          <div className="md:flex flex-col items-center p-5">
            <FormName formName={data.name} />
            {data.questions.map((val, i) => {
              return (
                <Card
                  i={i}
                  response={response}
                  setResponse={setResponse}
                  question={val.question}
                  type={val.type}
                  options={val.options}
                />
              );
            })}
          </div>
          <div className="fixed bottom-8 right-8 md:bottom-20 md:right-20">
            <div className="flex">
              <button
                className="text-4xl md:text-5xl m-auto drop-shadow-lg"
                onClick={submit}
              >
                <BsFillCheckCircleFill className="dark:text-white"/>
              </button>
            </div>
          </div>
        </>
      )}
      {error && <div className="text-5xl px-24 py-12">{error}</div>}
    </>
  );
}
