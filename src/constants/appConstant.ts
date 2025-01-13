export const appName = "Friendly Freddie";
export const copyright = "©";
export const country = "Canada";
export const year = new Date()?.getFullYear();
export const day = new Date().toLocaleDateString("en-us", { weekday: "long" });
export const date = new Date().toLocaleDateString("en-us");
export const time = new Date().toLocaleTimeString("en-us", {
  hour: "2-digit",
  minute: "2-digit",
});
export const routeChildVector = [
  {
    title: "Why us",
    href: "#why_us",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Our Clients",
    href: "#clients",
  },
];
