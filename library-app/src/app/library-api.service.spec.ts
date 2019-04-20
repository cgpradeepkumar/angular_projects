import { TestBed } from '@angular/core/testing';

import { LibraryApiService } from './library-api.service';

describe('LibraryApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryApiService = TestBed.get(LibraryApiService);
    expect(service).toBeTruthy();
  });
});
