import { isAndroid, isMobile } from "../utils/os";
import { qrcodegen } from "./qrcodegen";
export function shouldDeepLink(details) {
    if (isAndroid() && details.android) {
        return true;
    }
    else if (isMobile() && details.ios) {
        return true;
    }
    return false;
}
export class QRCodeModal {
    constructor(details) {
        this.id = "wc-modal-" + Date.now();
        this.reject = null;
        this.details = details;
    }
    open(uri) {
        const promise = new Promise((_, reject) => {
            this.reject = reject;
        });
        const overlay = document.createElement("div");
        overlay.style.cssText = [
            "background-color: rgba(0, 0, 0, 0.5)",
            "backdrop-filter: blur(4px)",
            "z-index: 10000",
            "height: 100vh",
            "width: 100vw",
            "position: fixed",
            "top: 0",
            "left: 0",
            "display: flex",
            "align-items: center",
            "justify-content: center",
            "pointer-events: auto",
        ].join(";");
        overlay.onclick = (e) => {
            e.stopPropagation();
            if (e.target === overlay) {
                this.reject?.("User cancelled");
                this.reject = null;
                this.close();
            }
        };
        const modal = document.createElement("div");
        modal.style.cssText = [
            "background-color: #f4f4f5",
            "padding: 1rem",
            "border-radius: 0.5rem",
        ].join(";");
        const qr = qrcodegen.QrCode.encodeText(uri, qrcodegen.QrCode.Ecc.MEDIUM);
        const canvas = document.createElement("canvas");
        const scale = 5;
        canvas.width = qr.size * scale;
        canvas.height = canvas.width;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            console.error("Failed to get canvas context");
            this.reject?.("Failed to get canvas context");
            this.reject = null;
            return promise;
        }
        for (let y = 0; y < qr.size; y++) {
            for (let x = 0; x < qr.size; x++) {
                ctx.fillStyle = qr.getModule(x, y) ? "#18181b" : "#f4f4f5";
                ctx.fillRect(x * scale, y * scale, scale, scale);
            }
        }
        if (shouldDeepLink(this.details)) {
            // Redirect to mobile app if deeplinks supported by wallet.
            window.location.href = isAndroid() ?
                this.generateAndroidIntent(uri) :
                this.generateIosIntent(uri);
            // TODO: render button to open mobile app
        }
        else {
            // On desktop (or mobile without deeplinks), show help message to scan the QR code
            const msg = document.createElement("div");
            msg.textContent = `Scan via ${this.details.name} mobile app`;
            msg.style.cssText = [
                "margin-bottom: 0.5rem",
                "font-size: 1rem",
                "text-align: center",
                "color: #18181b",
            ].join(";");
            modal.appendChild(msg);
        }
        const rootDiv = document.createElement("div");
        rootDiv.id = this.id;
        const shadowRoot = rootDiv.attachShadow({ mode: "open" });
        modal.appendChild(canvas);
        overlay.appendChild(modal);
        shadowRoot.appendChild(overlay);
        document.body.appendChild(rootDiv);
        return promise;
    }
    close() {
        const rootDiv = document.getElementById(this.id);
        if (rootDiv) {
            document.body.removeChild(rootDiv);
        }
        this.reject = null;
    }
    generateAndroidIntent(uri) {
        if (!this.details.android) {
            throw new Error("Android intent not provided");
        }
        const hashIndex = this.details.android.indexOf("#");
        return (this.details.android.slice(0, hashIndex) +
            "?" +
            encodeURIComponent(uri) +
            this.details.android.slice(hashIndex));
    }
    generateIosIntent(uri) {
        if (!this.details.ios) {
            throw new Error("iOS intent not provided");
        }
        return this.details.ios + "?" + encodeURIComponent(uri);
    }
}
//# sourceMappingURL=QRCodeModal.js.map