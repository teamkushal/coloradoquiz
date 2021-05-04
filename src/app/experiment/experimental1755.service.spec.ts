import { TestBed } from '@angular/core/testing';

import { Experimental1755Service } from './experimental1755.service';

describe('Experimental1755Service', () => {
  let service: Experimental1755Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1755Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
