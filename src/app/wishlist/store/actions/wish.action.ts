import { Action } from '@ngrx/store';
import { Product } from '../../../shared/models/product.model';

export const WISH_ADD_NEW: string = 'WISH_ADD_NEW';
export const WISH_REMOVE_PRODUCT: string = 'WISH_REMOVE_PRODUCT';
export const WISH_START_DOWNLOAD: string = 'WISH_START_DOWNLOAD';
export const WISH_DOWNLOAD_OK: string = 'WISH_DOWNLOAD_OK';
export const WISH_DOWNLOAD_ERROR: string = 'WISH_DOWNLOAD_ERROR';

export class WishAddNew implements Action {
    type: string = WISH_ADD_NEW;
    constructor ( public payload: Product ) { }
}

export class WishRemoteProduct implements Action {
    type: string = WISH_REMOVE_PRODUCT;
    constructor ( public payload: string ) { }
}

export class WishStartDownload implements Action {
    type: string = WISH_START_DOWNLOAD;
}

export class WishDownloadDone implements Action {
    type: string = WISH_DOWNLOAD_OK;
    constructor ( public payload: Product[] ) { }
}

export class WishDownloadError implements Action {
    type: string = WISH_DOWNLOAD_ERROR;
}

export type WishTypes =
  WishAddNew
| WishRemoteProduct
| WishStartDownload
| WishDownloadDone
| WishDownloadError;
