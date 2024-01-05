import { CircularProgressbar } from "react-circular-progressbar";

const ProgressBar = ({ value }: { value: number }) => {
  return (
    <CircularProgressbar
      styles={{
        trail: {
          stroke: "transparent",
        },
        path: {
          stroke: "var(--clr-primary)",
        },
      }}
      background={false}
      value={value}
      strokeWidth={4}
    />
  );
};

export default ProgressBar;
