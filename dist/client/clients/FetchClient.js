/**
 * A simple and minimal wrapper around the native `fetch` API.
 */
export class FetchClient {
    /**
     * Performs a GET request to the given `endpoint`, and returns the
     * JSON response.
     */
    static async get(endpoint, searchParams) {
        const url = new URL(endpoint);
        url.search = new URLSearchParams(searchParams).toString();
        const res = await fetch(url, { method: "GET" });
        return res.json();
    }
    /**
     * Performs a POST request to the given `endpoint`, and returns the
     * JSON response.
     */
    static async post(endpoint, body) {
        const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        return res.json();
    }
}
//# sourceMappingURL=FetchClient.js.map