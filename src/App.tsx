import React from "react";

import { Button } from "@mui/material";

import { useCount } from "./hooks/useCount";

export const App = () => {
  const [count, { countUp, countDown }] = useCount();

  return (
    <main>
      <p>count is: {count}</p>
      <p>
        <Button variant="contained" onClick={() => countUp()}>
          count up
        </Button>
      </p>
      <p>
        <Button variant="outlined" onClick={() => countDown()}>
          count down
        </Button>
      </p>
    </main>
  );
};
