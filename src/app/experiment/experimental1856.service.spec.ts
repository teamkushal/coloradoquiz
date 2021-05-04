import { TestBed } from '@angular/core/testing';

import { Experimental1856Service } from './experimental1856.service';

describe('Experimental1856Service', () => {
  let service: Experimental1856Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1856Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
