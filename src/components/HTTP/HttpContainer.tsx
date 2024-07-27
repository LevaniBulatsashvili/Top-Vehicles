import HttpContainerProps from "../../types/HTTP/HttpContainerProps";
import HttpError from "./HttpError";
import Loading from "./Loading";
import NoData from "./NoData";

export default function HttpContainer({
  isFetching,
  message,
  noData,
  children,
}: HttpContainerProps) {
  return (
    <>
      {isFetching && <Loading />}
      {!noData && children}
      {!isFetching && !message && noData && <NoData />}
      {message && <HttpError>{message}</HttpError>}
    </>
  );
}
