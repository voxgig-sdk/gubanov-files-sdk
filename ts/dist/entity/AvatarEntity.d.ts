import { GubanovFilesEntityBase } from '../GubanovFilesEntityBase';
import type { GubanovFilesSDK } from '../GubanovFilesSDK';
import type { Control } from '../types';
import type { Avatar, AvatarLoadMatch } from '../GubanovFilesTypes';
declare class AvatarEntity extends GubanovFilesEntityBase<Avatar> {
    constructor(client: GubanovFilesSDK, entopts: any);
    make(this: AvatarEntity): AvatarEntity;
    load(this: any, reqmatch?: AvatarLoadMatch, ctrl?: Control): Promise<AvatarEntity>;
}
export { AvatarEntity };
