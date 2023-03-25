import type { RouteRecordRaw } from "vue-router";
import layout from "@/layout/index.vue";
export const home = [
  {
    path: "/",
    redirect: "/dashboard",
    component: layout,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/view/home/index.vue"),
        meta: { title: "Dashboard", icon: "dashboard" },
      },
      {
        path: "/charts",
        name: "charts",
        component: () => import("@/view/charts/index.vue"),
        meta: { title: "Charts", icon: "charts" },
      },
      {
        path: "/websocket",
        name: "websocket",
        component: () => import("@/view/websocket/index.vue"),
        meta: { title: "websocket", icon: "websocket" },
      },
    ],
  },
  {
    path: "/document",
    component: layout,
    meta: { title: "Document", icon: "documentation" },
    children: [
      {
        path: "/tables",
        name: "tables",
        component: () => import("@/view/home/index.vue"),
        meta: { title: "Table" },
      },
      {
        path: "/tables1",
        name: "tables1",
        component: () => import("@/view/home/index.vue"),
        meta: { title: "Tables1" },
      },
    ],
  },
] as RouteRecordRaw[];
