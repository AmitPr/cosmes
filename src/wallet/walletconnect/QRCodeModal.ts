import type { IQRCodeModal } from "@walletconnect/legacy-types";

import { isAndroid, isMobile } from "../utils/os";
import { qrcodegen } from "./qrcodegen";

export type MobileAppDetails = {
  name: string;
  android?: string | undefined;
  ios?: string | undefined;
};

export function shouldDeepLink(details: MobileAppDetails): boolean {
  if (isAndroid() && details.android) {
    return true;
  } else if (isMobile() && details.ios) {
    return true;
  }
  return false;
}

export class QRCodeModal implements IQRCodeModal {
  private readonly id = "wc-modal-" + Date.now();
  private readonly details: MobileAppDetails;

  constructor(details: MobileAppDetails) {
    this.details = details;
  }

  public open(uri: string): void {
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
    overlay.onclick = (e): void => {
      e.stopPropagation();
      if (e.target === overlay) {
        this.close();
      }
    };

    const modal = document.createElement("div");
    modal.style.cssText = [
      "background-color: #f4f4f5",
      "padding: 1rem",
      "border-radius: 0.5rem",
    ].join(";");

    const qr = qrcodegen.QrCode.encodeText(
      uri,
      qrcodegen.QrCode.Ecc.MEDIUM
    );
    const canvas = document.createElement("canvas");
    const scale = 5;
    canvas.width = qr.size * scale;
    canvas.height = canvas.width;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Failed to get canvas context");
      return;
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
    } else {
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
  }

  public close(): void {
    const rootDiv = document.getElementById(this.id);
    if (rootDiv) {
      document.body.removeChild(rootDiv);
    }
  }

  private generateAndroidIntent(uri: string): string {
    if (!this.details.android) {
      throw new Error("Android intent not provided");
    }
    const hashIndex = this.details.android.indexOf("#");
    return (
      this.details.android.slice(0, hashIndex) +
      "?" +
      encodeURIComponent(uri) +
      this.details.android.slice(hashIndex)
    );
  }

  private generateIosIntent(uri: string): string {
    if (!this.details.ios) {
      throw new Error("iOS intent not provided");
    }
    return this.details.ios + "?" + encodeURIComponent(uri);
  }
}
