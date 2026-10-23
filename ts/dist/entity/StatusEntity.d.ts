import { GubanovFilesEntityBase } from '../GubanovFilesEntityBase';
import type { GubanovFilesSDK } from '../GubanovFilesSDK';
import type { Control } from '../types';
import type { Status, StatusLoadMatch } from '../GubanovFilesTypes';
declare class StatusEntity extends GubanovFilesEntityBase<Status> {
    constructor(client: GubanovFilesSDK, entopts: any);
    make(this: StatusEntity): StatusEntity;
    load(this: any, reqmatch?: StatusLoadMatch, ctrl?: Control): Promise<StatusEntity>;
}
export { StatusEntity };
