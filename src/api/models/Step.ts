import {fakerEN} from "@faker-js/faker";

export class Step {
    private name: string;
    private type: string = "simpleRunner";

    constructor() {
        this.name = 'stepName' + fakerEN.internet.username();
    }

    get getStep(): object {
        return [
                {
                    "name": this.name,
                    "type": this.type,
                    "properties": {
                        "property": [
                            {
                                "name": "script.content",
                                "value": "echo 'Hello World!'"
                            },
                            {
                                "name": "teamcity.step.mode",
                                "value": "default"
                            },
                            {
                                "name": "use.custom.script",
                                "value": "true"
                            }
                        ]
                    }
                }
            ]
    }
}