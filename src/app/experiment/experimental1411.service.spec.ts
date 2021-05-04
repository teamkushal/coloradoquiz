import { TestBed } from '@angular/core/testing';

import { Experimental1411Service } from './experimental1411.service';

describe('Experimental1411Service', () => {
  let service: Experimental1411Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1411Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
