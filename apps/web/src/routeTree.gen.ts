/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as UsersIndexImport } from './routes/users/index'
import { Route as SseTimeIndexImport } from './routes/sseTime/index'
import { Route as HelloIndexImport } from './routes/hello/index'
import { Route as CounterIndexImport } from './routes/counter/index'
import { Route as UsersUserIdImport } from './routes/users/$userId'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const UsersIndexRoute = UsersIndexImport.update({
  id: '/users/',
  path: '/users/',
  getParentRoute: () => rootRoute,
} as any)

const SseTimeIndexRoute = SseTimeIndexImport.update({
  id: '/sseTime/',
  path: '/sseTime/',
  getParentRoute: () => rootRoute,
} as any)

const HelloIndexRoute = HelloIndexImport.update({
  id: '/hello/',
  path: '/hello/',
  getParentRoute: () => rootRoute,
} as any)

const CounterIndexRoute = CounterIndexImport.update({
  id: '/counter/',
  path: '/counter/',
  getParentRoute: () => rootRoute,
} as any)

const UsersUserIdRoute = UsersUserIdImport.update({
  id: '/users/$userId',
  path: '/users/$userId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/users/$userId': {
      id: '/users/$userId'
      path: '/users/$userId'
      fullPath: '/users/$userId'
      preLoaderRoute: typeof UsersUserIdImport
      parentRoute: typeof rootRoute
    }
    '/counter/': {
      id: '/counter/'
      path: '/counter'
      fullPath: '/counter'
      preLoaderRoute: typeof CounterIndexImport
      parentRoute: typeof rootRoute
    }
    '/hello/': {
      id: '/hello/'
      path: '/hello'
      fullPath: '/hello'
      preLoaderRoute: typeof HelloIndexImport
      parentRoute: typeof rootRoute
    }
    '/sseTime/': {
      id: '/sseTime/'
      path: '/sseTime'
      fullPath: '/sseTime'
      preLoaderRoute: typeof SseTimeIndexImport
      parentRoute: typeof rootRoute
    }
    '/users/': {
      id: '/users/'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof UsersIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/users/$userId': typeof UsersUserIdRoute
  '/counter': typeof CounterIndexRoute
  '/hello': typeof HelloIndexRoute
  '/sseTime': typeof SseTimeIndexRoute
  '/users': typeof UsersIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/users/$userId': typeof UsersUserIdRoute
  '/counter': typeof CounterIndexRoute
  '/hello': typeof HelloIndexRoute
  '/sseTime': typeof SseTimeIndexRoute
  '/users': typeof UsersIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/users/$userId': typeof UsersUserIdRoute
  '/counter/': typeof CounterIndexRoute
  '/hello/': typeof HelloIndexRoute
  '/sseTime/': typeof SseTimeIndexRoute
  '/users/': typeof UsersIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/users/$userId'
    | '/counter'
    | '/hello'
    | '/sseTime'
    | '/users'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/users/$userId'
    | '/counter'
    | '/hello'
    | '/sseTime'
    | '/users'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/users/$userId'
    | '/counter/'
    | '/hello/'
    | '/sseTime/'
    | '/users/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  UsersUserIdRoute: typeof UsersUserIdRoute
  CounterIndexRoute: typeof CounterIndexRoute
  HelloIndexRoute: typeof HelloIndexRoute
  SseTimeIndexRoute: typeof SseTimeIndexRoute
  UsersIndexRoute: typeof UsersIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  UsersUserIdRoute: UsersUserIdRoute,
  CounterIndexRoute: CounterIndexRoute,
  HelloIndexRoute: HelloIndexRoute,
  SseTimeIndexRoute: SseTimeIndexRoute,
  UsersIndexRoute: UsersIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/users/$userId",
        "/counter/",
        "/hello/",
        "/sseTime/",
        "/users/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/users/$userId": {
      "filePath": "users/$userId.tsx"
    },
    "/counter/": {
      "filePath": "counter/index.tsx"
    },
    "/hello/": {
      "filePath": "hello/index.tsx"
    },
    "/sseTime/": {
      "filePath": "sseTime/index.tsx"
    },
    "/users/": {
      "filePath": "users/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
