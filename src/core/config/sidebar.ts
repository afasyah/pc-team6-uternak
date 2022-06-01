export interface SidebarContent {
  group: string;
  content: any;
}

const adminSidebarMenu: SidebarContent[] = [
  {
    group: "Dashboard",
    content: [
      {
        group: "Dashboard",
        content: [
          {
            name: "Overview",
            path: "/dashboard",
            hidden: false,
            exact: true,
            icon: "bi bi-grid-1x2",
          },
          {
            name: "Stats",
            path: "/dashboard/stats",
            hidden: false,
            exact: true,
            icon: "bi bi-graph-up",
          },
          {
            name: "Performance",
            path: "/dashboard/performance",
            hidden: false,
            exact: true,
            icon: "bi bi-activity",
          },
        ],
      },
      {
        group: "User Management",
        content: [
          {
            name: "Users",
            path: "/user",
            hidden: false,
            exact: true,
            icon: "bi bi-people",
          },
          {
            name: "Roles",
            path: "/roles",
            hidden: false,
            exact: true,
            icon: "bi bi-lock",
          },
        ],
      },
    ],
  },
];

const userSidebarMenu: SidebarContent[] = [
  {
    group: "Dashboard",
    content: [
      {
        group: "Dashboard",
        content: [
          {
            name: "Overview",
            path: "/dashboard",
            hidden: false,
            exact: true,
            icon: "bi bi-grid-1x2",
          },
          {
            name: "Stats",
            path: "/dashboard/stats",
            hidden: false,
            exact: true,
            icon: "bi bi-graph-up",
          },
        ],
      },
      {
        group: "My Things",
        content: [
          {
            name: "Applications",
            path: "/my-things/application",
            hidden: false,
            exact: true,
            icon: "bi bi-display",
          },
        ],
      },
    ],
  },
];

export default { adminSidebarMenu, userSidebarMenu };
