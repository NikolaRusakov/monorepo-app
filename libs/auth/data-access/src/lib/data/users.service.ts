import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Users } from './users';

@Injectable({ providedIn: 'root' })
export class UsersService extends EntityCollectionServiceBase<Users> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Users', serviceElementsFactory);
  }
}


// // entity metadata
// EntityMetadataMap = {
//   Container: {
//     additionalCollectionState: { page: {} }
//   }
// };
// // Custom Data Service to save page from backend to data
// export class CustomizeDataService extends DefaultDataService<Container> {
//   getWithQuery(params: string | QueryParams): Observable<Container[]> {
//     const pageIndex = params['pageIndex'] || '1';
//     return this.http.get(`api/containers?pageIndex=${pageIndex}`).
//     pipe(map((data: any) => {
//       const containers = data.data;
//       containers.page = data.page;
//       return containers as any;
//     }));
//   }
// }
// // create a page$ in service
// export class ContainerService extends EntityCollectionServiceBase<Container> {
//   page$: Observable<{pageIndex: number, pageCount: number}>;
//   constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory,
//               private http: HttpClient) {
//     super('Container', serviceElementsFactory);
//
//     this.page$ = this.selectors$['page$'];
//   }
//
// }
