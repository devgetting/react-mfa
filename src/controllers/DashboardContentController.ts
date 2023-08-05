import { Controller, Receiver, action, notify } from "@devgetting/react-init";
import { DashboardContext } from "Contexts/DashboardContext";
import { DashboardListener } from "listeners/DashboardListener";

@Controller(DashboardListener)
export class DashboardContentController {
    @Receiver(DashboardContext)
    private dashboardContext: DashboardContext;

    private removeNotifications: any;

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
        this.dashboardContext.serverNotifications.push(payload);

        if (!this.removeNotifications) {
            this.removeNotifications = setInterval(() => {

                this.removeFirstNotification();

                if(!this.notifications.length) {
                    clearInterval(this.removeNotifications);
                    this.removeNotifications = undefined;
                    return;
                }
            }, 5000);
        }
    }

    @action
    removeFirstNotification() {
        this.notifications.splice(0, 1);
    }
}