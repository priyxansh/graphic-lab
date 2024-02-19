import { Loader2 } from "lucide-react";

type SpinnerProps = {
  className?: string;
};

const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div className={`animate-spin m-auto ${className}`}>
      <Loader2 />
    </div>
  );
};

export default Spinner;
