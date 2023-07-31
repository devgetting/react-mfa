declare global {
    interface Window {
        webkitAudioContext: typeof AudioContext,
        doNotTrack: any;
        fingerPrint: string;
    }

    interface Navigator {
        msMaxTouchPoints: number;
        msDoNotTrack: any;
    }
}

export {}