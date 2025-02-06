export type TAuthModule = {
    name: string;
};

export type TServerAuthSetting = {
    perProjectPermissions: boolean;
    modules: {
        module: TAuthModule[];
    };
};


export class ServerAuthSetting {
    private perProjectPermissions: boolean;

    constructor(perProjectPermissions: boolean) {
        this.perProjectPermissions = perProjectPermissions;
    }

    get settings(): TServerAuthSetting {
        return {
            perProjectPermissions: this.perProjectPermissions,
            modules: {
                module: [
                    {
                        name: 'HTTP-Basic'
                    }
                ]
            }
        }
    }
}