import { Context } from "@devgetting/react-init";

type Notification = {
    title: string;
    body: string;
}

@Context
export class DashboardContext {
    public websocket: WebSocket;

    public notifications: Notification[] = []
    public serverNotifications: Notification[] = []
}