/**
 * Similar to `window.addEventListener`, but safe for nodejs/SSR environments,
 * and which returns an `unsubscribe` function that when called, removes the
 * event listener via `window.removeEventListener`.
 */
export declare function onWindowEvent(event: string, cb: EventListenerOrEventListenerObject, opts?: AddEventListenerOptions | undefined): () => void;
//# sourceMappingURL=window.d.ts.map