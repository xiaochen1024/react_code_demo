import React, { Suspense, useState, unstable_useTransition as useTransition } from "react";

function wrapPromise(promise) {
  let result;
  let status = "pending";
  let suspender = promise.then(
    (value) => {
      result = value;
      status = "success";
    },
    (reason) => {
      result = reason;
      status = "error";
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else {
        return result;
      }
    },
  };
}

function fetchData() {
  return wrapPromise(
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: new Date().toLocaleString() });
      }, 1000);
    })
  );
}

function Show({ resource }) {
  const { data } = resource.read();
  return <h3>{data}</h3>;
}

function Button({ onClick, children }) {
  const [startTransition, isPending] = useTransition({
    timeoutMs: 2000,
  });

  const buttonClick = () => {
    startTransition(() => {
      onClick();
    });
  };

  return (
    <>
      <button disabled={isPending} onClick={buttonClick}>
        {children}
      </button>
      <span>{isPending && "loading"}</span>
    </>
  );
}

export default function App() {
  const [data, setData] = useState(fetchData());

  const fetch = () => {
    setData(fetchData());
  };

  return (
    <Suspense fallback={<div>加载中...</div>}>
      <Button onClick={fetch}>点击加载</Button>
      <Show resource={data} />
    </Suspense>
  );
}
