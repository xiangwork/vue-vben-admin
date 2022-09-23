import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type AccountParams = BasicPageParams & {
  account?: string;
  nickname?: string;
};

export type RoleParams = {
  roleName?: string;
  status?: string;
};

export type RolePageParams = BasicPageParams & RoleParams;

export type DeptParams = {
  deptName?: string;
  status?: string;
};

export type MenuParams = {
  name?: string;
  status?: string;
};

export interface AccountListItem {
  user_id: string;
  username: string;
  real_name: string;
  avatar: string;
  desc: string;
  role: number;
  created_at: string;
  remark: string;
  status: number;
}

export interface DeptListItem {
  id: string;
  sort: string;
  created_at: string;
  remark: string;
  status: number;
}

export interface MenuListItem {
  id: string;
  sort: string;
  created_at: string;
  status: number;
  icon: string;
  component: string;
  permission: string;
}

export interface RoleListItem {
  id: string;
  role_name: string;
  value: string;
  status: number;
  sort: number;
  created_at: string;
}

/**
 * @description: Request list return value
 */
export type AccountListGetResultModel = BasicFetchResult<AccountListItem>;

export type DeptListGetResultModel = BasicFetchResult<DeptListItem>;

export type MenuListGetResultModel = BasicFetchResult<MenuListItem>;

export type RolePageListGetResultModel = BasicFetchResult<RoleListItem>;

export type RoleListGetResultModel = RoleListItem[];
