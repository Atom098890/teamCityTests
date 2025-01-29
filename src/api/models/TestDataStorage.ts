import {Endpoints} from "@src/api/enums/endpoints";
import {UncheckedBase} from "@src/api/requests/UncheckedBase";
import {Spec} from "@src/api/spec/SpecificationsApi";

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
}