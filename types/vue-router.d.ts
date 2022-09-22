export {};

declare module 'vue-router' {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    sort?: number;
    // title
    title: string;
    // dynamic router level.
    dynamic_level?: number;
    // dynamic router real route path (For performance).
    real_path?: string;
    // Whether to ignore permissions
    ignore_auth?: boolean;
    // role info
    roles?: RoleEnum[];
    // Whether not to cache
    ignore_keep_alive?: boolean;
    // Is it fixed on tab
    affix?: boolean;
    // icon on tab
    icon?: string;
    frame_src?: string;
    // current page transition
    transition_name?: string;
    // Whether the route has been dynamically added
    hide_breadcrumb?: boolean;
    // Hide submenu
    hide_children_in_menu?: boolean;
    // Carrying parameters
    carry_param?: boolean;
    // Used internally to mark single-level menus
    single?: boolean;
    // Currently active menu
    current_active_menu?: string;
    // Never show in tab
    hide_tab?: boolean;
    // Never show in menu
    hide_menu?: boolean;
    is_link?: boolean;
    // only build for Menu
    ignore_route?: boolean;
    // Hide path for children
    hide_path_for_children?: boolean;
  }
}
