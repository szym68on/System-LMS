/* eslint-disable react/prop-types */
import { useEffect, useState, useMemo } from "react";

function OpenQuestion({ element, sentData, setFinalData }) {
  const [textValue, setTextValue] = useState("");

  return (
    <div>
      <div className="mt-10 border-t-[1px] pt-3 border-gray border-opacity-20">
        <h2 className="text-lg text-green py-5">Pytanie: </h2>
        <p className="mt-3 text-gray opacity-70">{element.pytanie}</p>
        <div className="mt-3">
          <h3 className="text-blue">Odpowiedzi</h3>
          <form className="mt-5 flex flex-col gap-y-5">
            <textarea
              className="w-[800px] border-[1px] border-blue rounded-lg h-[250px] pt-5 pl-2 focus:outline-none"
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            ></textarea>
            <div className="flex justify-between">
              <button className="w-[80px]">Wyślij</button>
              <p>0/{element.punkty}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OpenQuestion;
