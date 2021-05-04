import { TestBed } from '@angular/core/testing';

import { Experimental1082Service } from './experimental1082.service';

describe('Experimental1082Service', () => {
  let service: Experimental1082Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1082Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
