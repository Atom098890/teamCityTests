import {Endpoints} from "@src/api/enums/endpoints";
import {UncheckedBase} from "@src/api/requests/UncheckedBase";
import {Spec} from "@src/api/spec/SpecificationsApi";

export class TestDataStorage {
    private static testDataStorage: TestDataStorage;
    private entitiesMap: Map<Endpoints, Set<string>>

    private constructor() {
        this.entitiesMap = new Map<Endpoints, Set<string>>();
    }

    public static getStorage(): TestDataStorage {
        if(this.testDataStorage === undefined) {
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

    public addEntity(endpoint: Endpoints, value: string) {
        if(!this.entitiesMap.has(endpoint)) {
            this.entitiesMap.set(endpoint, new Set<string>());
        }

        this.entitiesMap.get(endpoint).add(value);
    }

    public deleteEntities() {
        this.entitiesMap.forEach((entity, endpoint) => {
            entity.forEach(async (value) => {
               await new UncheckedBase().delete(Spec.superAuthSpec, endpoint, value)
            });
        });

        this.entitiesMap.clear();
    }
}