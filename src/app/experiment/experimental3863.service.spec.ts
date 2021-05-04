import { TestBed } from '@angular/core/testing';

import { Experimental3863Service } from './experimental3863.service';

describe('Experimental3863Service', () => {
  let service: Experimental3863Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3863Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
