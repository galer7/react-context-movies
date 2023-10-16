import { withRouter } from "next/router";
import { useReducer } from "react";

function myReducer(state: ReducerState, action: string): ReducerState {
  switch (action) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

interface Movie {
  id: number;
  name: string;
  genre: string;
  releases: {
    id: number;
    datetime: string;
    cinema: Cinema;
  }[];
}

interface Cinema {
  name: string;
}

// movie at cinema @ time

const TestPage = () => {
  const [state, dispatch] = useReducer(myReducer, { count: 10 });

  console.log("rerender");
  return (
    <div>
      <h1>State</h1>
      <p>State: {JSON.stringify(state)}</p>

      <Button action={() => dispatch("increment")} name={"Increment"} />
      <Button action={() => dispatch("decrement")} name={"Decrement"} />
    </div>
  );
};

const Button = ({ action, name }: { action: () => void; name: string }) => {
  return (
    <>
      <button onClick={() => action()}>{name}</button>
    </>
  );
};

export default withRouter(TestPage);

interface ReducerState {
  count: number;
}
