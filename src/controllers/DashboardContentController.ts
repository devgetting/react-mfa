import { Controller, Receiver, notify } from "@devgetting/react-init";
import { DashboardContext } from "Contexts/DashboardContext";
import { DashboardListener } from "listeners/DashboardListener";

@Controller(DashboardListener)
export class DashboardContentController {
    @Receiver(DashboardContext)
    private dashboardContext: DashboardContext;

    constructor() {
        document.title = 'Welcome | Dashboard';
    }

    get notifications() {
        return this.dashboardContext.notifications;
    }

    @notify
    addNotification() {
        const payload = {
            title: 'Nuevo dispositivo',
            body: 'Un nuevo dispositivo esta intentando autenticarse'
        };

        this.notifications.push(payload);
    }
}