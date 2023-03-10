import dappsmeta from './metainfo-dapps';
const Dapps = () =>
  import(
    /* webpackChunkName: "dapp" */ '@/modules/dapps-center/ModuleDappsCenter'
  );
export default [
  {
    path: '',
    name: 'Dapps',
    component: Dapps
  },
  ...Object.values(dappsmeta).map(dm => {
    return {
      path: dm.path,
      name: dm.name,
      component: dm.layout,
      meta: dm.meta,
      children: dm.children
    };
  })
];
