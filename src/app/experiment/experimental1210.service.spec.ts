import { TestBed } from '@angular/core/testing';

import { Experimental1210Service } from './experimental1210.service';

describe('Experimental1210Service', () => {
  let service: Experimental1210Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1210Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
