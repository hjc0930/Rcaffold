export interface IRoute {
  path: string;
  component: any;
  routes?: IRoute[];
  redirect?: string;
  exact?: boolean;
}
