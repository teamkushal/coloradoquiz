import { TestBed } from '@angular/core/testing';

import { Experimental188Service } from './experimental188.service';

describe('Experimental188Service', () => {
  let service: Experimental188Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental188Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
