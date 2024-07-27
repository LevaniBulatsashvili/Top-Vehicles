import Children from "../Children";

type HttpContainerProps = {
  isFetching: boolean;
  message: string | undefined;
  noData: boolean;
} & Children;

export default HttpContainerProps;
