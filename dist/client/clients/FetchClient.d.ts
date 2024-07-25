import { JsonValue } from "@bufbuild/protobuf";
/**
 * A simple and minimal wrapper around the native `fetch` API.
 */
export declare class FetchClient {
    /**
     * Performs a GET request to the given `endpoint`, and returns the
     * JSON response.
     */
    static get<T>(endpoint: string, searchParams?: Record<string, string> | undefined): Promise<T>;
    /**
     * Performs a POST request to the given `endpoint`, and returns the
     * JSON response.
     */
    static post<T>(endpoint: string, body: JsonValue): Promise<T>;
}
//# sourceMappingURL=FetchClient.d.ts.map