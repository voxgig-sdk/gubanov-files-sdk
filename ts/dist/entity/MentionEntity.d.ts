import { GubanovFilesEntityBase } from '../GubanovFilesEntityBase';
import type { GubanovFilesSDK } from '../GubanovFilesSDK';
import type { Control } from '../types';
import type { Mention, MentionListMatch } from '../GubanovFilesTypes';
declare class MentionEntity extends GubanovFilesEntityBase<Mention> {
    constructor(client: GubanovFilesSDK, entopts: any);
    make(this: MentionEntity): MentionEntity;
    list(this: any, reqmatch?: MentionListMatch, ctrl?: Control): Promise<MentionEntity[]>;
}
export { MentionEntity };
