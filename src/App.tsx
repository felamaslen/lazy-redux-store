import React, { ComponentType } from "react";
import { useDispatch } from "react-redux";

import { actionA, actionB, actionC, actionLoadStore } from "./actions";
import { useSelector } from "./useSelector";

export const App: ComponentType = () => {
  const dispatch = useDispatch();

  const stateA = useSelector<string>((root) => root.appA?.stateA);
  const stateB = useSelector<number>((root) => root.appB?.stateB);

  const hasA = useSelector((root) => Reflect.has(root, "appA"));
  const hasB = useSelector((root) => Reflect.has(root, "appB"));

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
      }}
    >
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Loaded</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>A</td>
            <td>{hasA ? "yes" : "no"}</td>
            <td>{stateA}</td>
          </tr>
          <tr>
            <td>B</td>
            <td>{hasB ? "yes" : "no"}</td>
            <td>{stateB}</td>
          </tr>
        </thead>
      </table>
      <button onClick={() => dispatch(actionLoadStore("appA"))}>Load A</button>
      <button onClick={() => dispatch(actionLoadStore("appB"))}>Load B</button>
      <button onClick={() => dispatch(actionA())}>Dispatch action A</button>
      <button onClick={() => dispatch(actionB())}>Dispatch action B</button>
      <button onClick={() => dispatch(actionC())}>Dispatch action C</button>
    </div>
  );
};
