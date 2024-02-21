type ThemeConfig = {
  name: string;
  navigationSize: number;
  afterVerticalNavMenuContentPosition: "fixed" | "static";
  beforeVerticalNavMenuContentPosition: "fixed" | "static";
  navSubItemIcon: string;
  defaultDataGridRowHeight: number;
};

const themeConfig: ThemeConfig = {
  name: "KeraCars",
  navigationSize: 208,
  afterVerticalNavMenuContentPosition: "fixed",
  beforeVerticalNavMenuContentPosition: "fixed",
  navSubItemIcon: "tabler:circle",
  defaultDataGridRowHeight: 55,
};

export default themeConfig;
