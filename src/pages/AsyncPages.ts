import loadable from "@loadable/component";


const DashboardPage = loadable(()=>import('./dashboard/DashboardPage'));

export {
    DashboardPage
}