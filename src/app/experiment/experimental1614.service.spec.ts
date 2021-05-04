import { TestBed } from '@angular/core/testing';

import { Experimental1614Service } from './experimental1614.service';

describe('Experimental1614Service', () => {
  let service: Experimental1614Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1614Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
