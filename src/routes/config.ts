import Loadable from "react-loadable";
import PageLoading from "@/components/PageLoading";
import { IRoute } from "./interface";

const comFactory = (loader: Promise<any>): JSX.Element => {
  return Loadable({
    loader: () => loader,
    loading: PageLoading,
  });
};

const routers: IRoute[] = [
  {
    path: "/",
    component: comFactory(import("@/pages")),
  },
];

export default routers;
