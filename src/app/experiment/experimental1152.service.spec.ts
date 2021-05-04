import { TestBed } from '@angular/core/testing';

import { Experimental1152Service } from './experimental1152.service';

describe('Experimental1152Service', () => {
  let service: Experimental1152Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1152Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
