to run an example locally:
clone this repo, run `npm install && npm start`, and open http://localhost:8080

## example:

```jsx
function MarketoForm(props) {
  useMarketo({ baseUrl: "", munchkinId: "", formId: "", callback: () => {} });

  return <form id={`mktoForm_${formId}`} />;
}
```

## copy the hook here:

```jsx
import { useState, useEffect } from "react";

function appendScript(baseUrl, setScriptLoaded) {
  if (window.MktoForms2) return setScriptLoaded(true);

  const script = document.createElement("script");
  script.src = `${baseUrl}/js/forms2/js/forms2.min.js`;
  script.onload = () => (window.MktoForms2 ? setScriptLoaded(true) : null);
  document.body.appendChild(script);
}

function useMarketo({ baseUrl, munchkinId, formId, callback }) {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (scriptLoaded) {
      window.MktoForms2.loadForm(baseUrl, munchkinId, formId, callback);
      return;
    }
    appendScript(baseUrl, setScriptLoaded);
  }, [scriptLoaded, baseUrl, munchkinId, formId, callback]);
}

export default useMarketo;
```
