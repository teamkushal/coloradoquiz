import { TestBed } from '@angular/core/testing';

import { Experimental1067Service } from './experimental1067.service';

describe('Experimental1067Service', () => {
  let service: Experimental1067Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1067Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
