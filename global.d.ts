declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";

declare module "react-loadable" {
  export default ({ loader, loading }) => JSX.Element;
}

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.less" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.sass" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}
