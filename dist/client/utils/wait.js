/**
 * Synchronously waits for the given number of `milliseconds`.
 */
export async function wait(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
//# sourceMappingURL=wait.js.map