export class File {
    name: string;
    owner: string;
    accessValues: string;
    lastUpdated: Date;
    fileSize: number;
    type: string;
    group: number;
    parent: File;
    subFiles: File[];

    constructor(name: string, parent: File, type: string, accessValues: string){
        this.name = name;
        this.parent = parent;
        this.type = type;
        this.lastUpdated = new Date(2022, Math.round((Math.random() * 10)), Math.round((Math.random() * 27)));
        this.owner = 'admin';
        this.accessValues = (this.type == "folder") ? "d" + accessValues : "-" + accessValues;
        this.fileSize = (this.type == "folder") ? 0 :Math.round(Math.random() * 1000);
        this.group = 12221233;
    }

    fullOutput(): string {
        return this.accessValues + " " + this.owner + " " + this.group + " " + this.fileSize + " " + this.lastUpdated.toDateString() + " " + this.name;
    }

    getPath(): string {
        let parent: File = this.parent;
        let path: string = this.name;
        while(parent != null) {
            path = parent.name + "/" + path;
            parent = parent.parent;
        }
        return path;
    }
}