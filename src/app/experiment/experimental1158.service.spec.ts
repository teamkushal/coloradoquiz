import { TestBed } from '@angular/core/testing';

import { Experimental1158Service } from './experimental1158.service';

describe('Experimental1158Service', () => {
  let service: Experimental1158Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1158Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
