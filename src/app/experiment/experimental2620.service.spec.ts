import { TestBed } from '@angular/core/testing';

import { Experimental2620Service } from './experimental2620.service';

describe('Experimental2620Service', () => {
  let service: Experimental2620Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2620Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
