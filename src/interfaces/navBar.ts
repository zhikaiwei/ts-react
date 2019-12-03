/**
 * nav bar item
 */
export interface NavBarItem {
  label: string;
  path?: string;
  key: string;
  icon?: string;
  children?: NavBarItem[];
}
