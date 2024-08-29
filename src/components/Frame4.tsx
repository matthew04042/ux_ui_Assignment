import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";

export type Frame4Type = {
  className?: string;
};

const Frame4: FunctionComponent<Frame4Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  return (
    <div
      className={[
        css`
          width:7.993rem;
          height: 18.438rem;
          position: relative;
          cursor: pointer;
          max-width: 100%;
          max-height: 100%;
          overflow: auto;
          text-align: left;
          font-size: var(--font-size-mini);
          color: var(--color-black);
          font-family: var(--font-poppins);
        `,
        className,
      ].join(" ")}
      onClick={onFrameContainerClick}
    >
      <div
        className={css`
          position: absolute;
          top: 0rem;
          left: 0rem;
          background-color: var(--color-whitesmoke-100);
          width: 7.063rem;
          height: 2.563rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: var(--padding-2xs) var(--padding-14xl);
          box-sizing: border-box;
        `}
      >
        <div
          className={css`
            position: relative;
            line-height: 1.5rem;
            font-weight: 500;
            white-space: pre-wrap;
          `}
        >
          D.R. Equip.
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 12.813rem;
          left: 0rem;
          background-color: var(--color-whitesmoke-100);
          width: 7.063rem;
          height: 2.563rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: var(--padding-2xs) var(--padding-14xl);
          box-sizing: border-box;
        `}
      >
        <div
          className={css`
            position: relative;
            line-height: 1.5rem;
            font-weight: 500;
          `}
        >
          Podiartric
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 15.375rem;
          left: 0rem;
          background-color: var(--color-whitesmoke-100);
          width: 7.063rem;
          height: 2.563rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: var(--padding-2xs) var(--padding-14xl);
          box-sizing: border-box;
        `}
      >
        <div
          className={css`
            position: relative;
            line-height: 1.5rem;
            font-weight: 500;
          `}
        >
          Test Equip.
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 10.25rem;
          left: 0rem;
          background-color: var(--color-whitesmoke-100);
          width: 7.063rem;
          height: 2.563rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: var(--padding-2xs) var(--padding-14xl);
          box-sizing: border-box;
        `}
      >
        <div
          className={css`
            position: relative;
            line-height: 1.5rem;
            font-weight: 500;
          `}
        >
          Medical
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 7.688rem;
          left: 0rem;
          background-color: var(--color-whitesmoke-100);
          width: 7.063rem;
          height: 2.563rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: var(--padding-2xs) var(--padding-14xl);
          box-sizing: border-box;
        `}
      >
        <div
          className={css`
            position: relative;
            line-height: 1.5rem;
            font-weight: 500;
          `}
        >
          F.V. Equip
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 5.125rem;
          left: 0rem;
          background-color: var(--color-whitesmoke-100);
          width: 7.063rem;
          height: 2.563rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: var(--padding-2xs) var(--padding-14xl);
          box-sizing: border-box;
        `}
      >
        <div
          className={css`
            position: relative;
            line-height: 1.5rem;
            font-weight: 500;
          `}
        >{`Exam R. `}</div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 2.563rem;
          left: 0rem;
          background-color: var(--color-whitesmoke-100);
          width: 7.063rem;
          height: 2.563rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: var(--padding-2xs) var(--padding-14xl);
          box-sizing: border-box;
        `}
      >
        <div
          className={css`
            position: relative;
            line-height: 1.5rem;
            font-weight: 500;
          `}
        >
          P. X-Ray
        </div>
      </div>
    </div>
  );
};

export default Frame4;
