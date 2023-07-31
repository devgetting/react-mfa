import { Controller, Receiver, Routing, action, notify, routing } from "@devgetting/react-init";
import { DashboardContext } from "Contexts/DashboardContext";
import { DashboardListener } from "listeners/DashboardListener";

@Controller(DashboardListener)
export class HeaderController {
    @Receiver(DashboardContext)
    private dashboardContext: DashboardContext;

    @routing
    private history: Routing;
    
    public showNotification = false; 

    constructor() {}

    get serverNotifications() {
        return this.dashboardContext.serverNotifications;
    }

    get websocket() {
        return this.dashboardContext.websocket;
    }

    @action
    public setShowNotification(showNotification: boolean) {
        console.log(showNotification);
        this.showNotification = showNotification;
    }

    public goToNotification(fingerprint: string) {
        this.showNotification = false;
        this.history.redirect('/notification');
    }
}