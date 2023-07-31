export default function() {
    const fingerprint = {
        userAgent: navigator.userAgent,
        language: navigator.language,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        screenResolution: getScreenResolution(),
        colorDepth: getColorDepth(),
        touchSupport: checkTouchSupport(),
        plugins: getInstalledPlugins(),
        fonts: getInstalledFonts(),
        audioContext: getAudioContextFingerprint(),
        canvas: getCanvasFingerprint(),
        hardwareConcurrency: getHardwareConcurrency(),
        platform: getPlatform(),
        doNotTrack: getDoNotTrackValue(),
    };

    return JSON.stringify(fingerprint)
}


function getScreenResolution() {
    return `${window.screen.width}x${window.screen.height}`;
}

function getColorDepth() {
    return window.screen.colorDepth;
}

function checkTouchSupport() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

function getInstalledPlugins() {
    return Array.from(navigator.plugins, (plugin) => plugin.name).join(",");
}

function getInstalledFonts() {
    return Array.from(document.fonts, (font) => font.family).join(",");
}

function getAudioContextFingerprint() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        return audioCtx ? "supported" : "not supported";
    } catch (error) {
        return "error";
    }
}

function getCanvasFingerprint() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial'";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.fillText("!bAdf00d", 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText("!bAdf00d", 4, 17);

    const dataURL = canvas.toDataURL();
    canvas.remove();

    return dataURL;
}

function getHardwareConcurrency() {
    return navigator.hardwareConcurrency || "unknown";
}

function getPlatform() {
    return navigator.platform || "unknown";
}

function getDoNotTrackValue() {
    return navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack || "unspecified";
}



