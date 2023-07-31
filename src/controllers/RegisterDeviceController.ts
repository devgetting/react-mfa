import { Controller, action } from "@devgetting/react-init";
import { DashboardListener } from "listeners/DashboardListener";
import { MutableRefObject } from "react";

@Controller(DashboardListener)
export class RegisterDeviceController {
    public deviceName: MutableRefObject<HTMLInputElement>;

    public showRegisterDeviceCard: boolean = false;

    @action
    public onToggleRegisterDeviceCard() {
        this.showRegisterDeviceCard = !this.showRegisterDeviceCard;
    }

    @action
    public onChangeDeviceName(deviceName: string) {
        this.deviceName.current.value = deviceName;
    }

    public onNotConfirm() {}

    onConfirm() {}

}