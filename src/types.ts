import type * as Apps from "./apps";

export type AppsNamespace = typeof Apps;

export type AppKey = keyof AppsNamespace;
