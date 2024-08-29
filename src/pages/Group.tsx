import { FunctionComponent } from "react";
import { css } from "@emotion/css";

const Group: FunctionComponent = () => {
  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        height: 11.063rem;
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 0rem;
          left: 0rem;
          border-radius: var(--br-3xs);
          border: 1px solid #d7d7d7;
          box-sizing: border-box;
          width: 17.5rem;
          height: 11.063rem;
        `}
      />
    </div>
  );
};

export default Group;
