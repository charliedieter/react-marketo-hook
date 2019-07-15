import React, { useState } from "react";
import ReactDOM from "react-dom";
import useMarketo from "./useMarketo";

function Form(props) {
  const { baseUrl, munchkinId, formId } = props;
  if (!(baseUrl && munchkinId && formId)) return "Fill the fields and a form should appear";

  useMarketo(props);

  return <form id={`mktoForm_${formId}`} />;
}

function Example() {
  const [inputs, setInputs] = useState({
    baseUrl: "",
    munchkinId: "",
    formId: "",
    callback: ""
  });

  const _handleChange = e => {
    e.persist();

    setInputs(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main>
      <div>
        {Object.keys(inputs).map(f => {
          return (
            <label key={f}>
              {f}
              <input type="text" name={f} onChange={_handleChange} />
            </label>
          );
        })}
      </div>
      <div>
        <Form {...inputs} />
      </div>
    </main>
  );
}

ReactDOM.render(<Example />, document.getElementById("app"));
