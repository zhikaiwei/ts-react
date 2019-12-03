import { NavBarItem } from "../../interfaces/navBar";

export const navBarMenus: NavBarItem[] = [
  {
    label: "总览管理",
    key: "/overview",
    icon: "pie-chart",
    children: [
      {
        path: "/overview/chinese-dollar-bond",
        key: "/overview/chinese-dollar-bond",
        label: "中资美元债券"
      },
      // {
      //   path: "/overview/chinese-dollar-increase",
      //   key: "/overview/chinese-dollar-increase",
      //   label: "中资美元债涨幅榜",
      // },
      // {
      //   path: "/overview/chinese-dollar-decline",
      //   key: "/overview/chinese-dollar-decline",
      //   label: "中资美元债跌幅榜",
      // },
      {
        path: "/overview/chinese-government-bonds",
        key: "/overview/chinese-government-bonds",
        label: "中国国债"
      },
      {
        path: "/overview/foreign-exchange",
        key: "/overview/foreign-exchange",
        label: "总览外汇"
      },
      {
        path: "/overview/national-debt",
        key: "/overview/national-debt",
        label: "国开债"
      },
      {
        path: "/overview/offshore-dollar-interest-rate",
        key: "/overview/offshore-dollar-interest-rate",
        label: "离岸美元拆借利率"
      },
      {
        path: "/overview/reverse-repo-rate",
        key: "/overview/reverse-repo-rate",
        label: "逆回购利率"
      },
      {
        path: "/overview/us-treasury-bond",
        key: "/overview/us-treasury-bond",
        label: "美国国债"
      }
    ]
  },
  {
    label: "美元债一级",
    key: "dollarPrimeBond",
    icon: "pie-chart",
    children: [
      {
        path: "/dollar-bond/new-bonds",
        key: "/dollar-bond/new-bonds",
        label: "新发债券"
      },
      // {
      //   path: "/dollar-bond/issuance-history",
      //   key: "/dollar-bond/issuance-history",
      //   label: "发行历史",
      // },
      {
        path: "/dollar-bond/not-notice",
        key: "/dollar-bond/not-notice",
        label: "未公告券"
      }
    ]
  },
  {
    label: "中资美元债管理",
    path: "/chinese-bond-mgmt",
    key: "/chinese-bond-mgmt",
    icon: "pie-chart"
  },
  {
    label: "主体评级管理",
    path: "/subject-mgmt",
    key: "/subject-mgmt",
    icon: "pie-chart"
  },
  {
    label: "债项评级管理",
    path: "/debt-mgmt",
    key: "/debt-mgmt",
    icon: "pie-chart"
  },
  {
    label: "中债估值管理",
    path: "/china-bond-valuation",
    key: "/china-bond-valuation",
    icon: "pie-chart"
  },
  // {
  //   label: "关联方管理",
  //   path: "/related-party-mgmt",
  //   key: "/related-party-mgmt",
  //   icon: "pie-chart",
  // },
  {
    label: "翻译",
    path: "/translation-mgmt",
    key: "/translation-mgmt",
    icon: "pie-chart"
  },
  {
    label: "登录数据",
    path: "/login-data-mgmt",
    key: "/login-data-mgmt",
    icon: "pie-chart"
  }
];
