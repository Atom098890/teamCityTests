export enum Role {
    ADMIN = 'SYSTEM_ADMIN'
}

export class Roles {
    private roleId: Role

    constructor(roleId: Role) {
        this.roleId = roleId;
    }

    get getRole(): object {
        return {
            role: [
                {
                    roleId: this.roleId,
                    scope: 'g'
                }
            ]
        }
    }
}