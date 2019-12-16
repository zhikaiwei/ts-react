import { NavBarItem } from "../../interfaces/navBar";

export const navBarMenus: NavBarItem[] = [
  {
    label: "Item1",
    key: "/overview",
    icon: "pie-chart",
    children: [
      {
        path: "/overview/chinese-dollar-bond",
        key: "/overview/chinese-dollar-bond",
        label: "Option 1"
      },
      {
        path: "/overview/chinese-government-bonds",
        key: "/overview/chinese-government-bonds",
        label: "Option 2"
      },
      {
        path: "/overview/foreign-exchange",
        key: "/overview/foreign-exchange",
        label: "Option 3"
      },
      {
        path: "/overview/national-debt",
        key: "/overview/national-debt",
        label: "Option 4"
      },
      {
        path: "/overview/offshore-dollar-interest-rate",
        key: "/overview/offshore-dollar-interest-rate",
        label: "Option 5"
      }
    ]
  },
  {
    label: "Item2",
    key: "dollarPrimeBond",
    icon: "pie-chart",
    children: [
      {
        path: "/dollar-bond/new-bonds",
        key: "/dollar-bond/new-bonds",
        label: "Option 1"
      },
      {
        path: "/dollar-bond/not-notice",
        key: "/dollar-bond/not-notice",
        label: "Option 2"
      }
    ]
  },
  {
    label: "Item3",
    path: "/chinese-bond-mgmt",
    key: "/chinese-bond-mgmt",
    icon: "pie-chart"
  },
  {
    label: "Item4",
    path: "/subject-mgmt",
    key: "/subject-mgmt",
    icon: "pie-chart"
  }
];
