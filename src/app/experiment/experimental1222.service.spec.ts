import { TestBed } from '@angular/core/testing';

import { Experimental1222Service } from './experimental1222.service';

describe('Experimental1222Service', () => {
  let service: Experimental1222Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1222Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
