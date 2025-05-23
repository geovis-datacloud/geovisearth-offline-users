import type { JwtPayload } from "casdoor-js-sdk/lib/cjs/sdk";
export type CasdoorHiddenConfig = {
    serverUrl: string;
    clientId: string;
    appName: string;
    organizationName: string;
    redirectPath?: string;
    loginCallback: (accessToken: string, user: JwtPayload) => void;
};
declare class CasdoorHidden {
    private loginCallback;
    private sdk;
    constructor(config: CasdoorHiddenConfig);
    listenerLogin(): boolean;
    start(): void;
    getSigninUrl(): string;
}
export declare function getSdk(config: CasdoorHiddenConfig): CasdoorHidden;
export {};
