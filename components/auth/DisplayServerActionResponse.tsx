type Props = {
  result: {
    message?: string;
  };
  classes?: string;
};
import clsx from "clsx";
export function DisplayServerActionResponse({ result, classes }: Props) {
  return (
    result?.message && (
      <p className={clsx("text-sm text-danger", classes)}>{result?.message}</p>
    )
  );
}
