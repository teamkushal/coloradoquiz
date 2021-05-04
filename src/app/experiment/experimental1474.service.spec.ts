import { TestBed } from '@angular/core/testing';

import { Experimental1474Service } from './experimental1474.service';

describe('Experimental1474Service', () => {
  let service: Experimental1474Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1474Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
