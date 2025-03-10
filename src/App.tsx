import { lazy, Suspense, useEffect } from "react";

const TaskOne = lazy(() => import("@/pages/TaskOne"));
const TaskTwo = lazy(() => import("@/pages/TaskTwo"));

function App() {
  const params = new URLSearchParams(window.location.search);
  const pageOne = params.has("one");

  return (
    <Suspense fallback={<div />}>
      {pageOne ? <TaskOne /> : <TaskTwo />}
    </Suspense>
  );
}

export default App;
