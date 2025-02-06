import {Endpoints} from "@src/api/enums/endpoints";
import {UncheckedBase} from "@src/api/requests/UncheckedBase";
import {Spec} from "@src/api/spec/SpecificationsApi";

type TProject = {
    id: string;
    name: string;
    description?: string;
    href: string;
    webUrl: string;
};

type TProjectsResponse = {
    project: TProject[];
};

export type TUser = {
    username: string;
    name: string;
    id: number;
    href: string;
};

export type TUsersResponse = {
    user: TUser[];
};



export class TestDataStorage {
    private static testDataStorage: TestDataStorage;
    private entitiesMap: Map<Endpoints, Set<object>>

    private constructor() {
        this.entitiesMap = new Map<Endpoints, Set<object>>();
    }

    public static getStorage(): TestDataStorage {
        if(!TestDataStorage.testDataStorage) {
            this.testDataStorage = new TestDataStorage();
        }
        return this.testDataStorage;
    }

    /*
    Map {
    'app/rest/buildTypes/' => Set { 'Build1', 'Build2' },
    'app/rest/projects/' => Set { 'Project1' }
    }
    */

    public addEntity(endpoint: Endpoints, option: object) {
        if(!this.entitiesMap.has(endpoint)) {
            this.entitiesMap.set(endpoint, new Set<object>());
        }

        this.entitiesMap.get(endpoint).add(option);
    }

    public async deleteEntities() {
        this.entitiesMap.forEach((entity, endpoint) => {
            entity.forEach( (value) => {
                if (value['username']) {
                    new UncheckedBase().delete(Spec.superAuthSpec, endpoint, `username:${value['username']}`);
                } else {
                    new UncheckedBase().delete(Spec.superAuthSpec, endpoint, `${value['id']}`);
                }
            });
        });

        this.entitiesMap.clear();
    }

    public async deleteAllEntities() {
        try {
            const api = new UncheckedBase();

            const resProjects = await api.read(Spec.superAuthSpec, Endpoints.PROJECTS, '');
            const projects: TProjectsResponse = await resProjects.json();

            await Promise.all(
                projects.project.map(p => api.delete(Spec.superAuthSpec, Endpoints.PROJECTS, p.id))
            );

            const resUsers = await api.read(Spec.superAuthSpec, Endpoints.USERS, '');
            const users: TUsersResponse = await resUsers.json();

            await Promise.all(
                users.user.map(u => api.delete(Spec.superAuthSpec, Endpoints.USERS, `username:${u.username}`))
            );

        } catch (error) {
            throw new Error(`Error method deleteAll => ${error.message}`);
        }
    }

}