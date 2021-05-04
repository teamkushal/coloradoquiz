import { TestBed } from '@angular/core/testing';

import { Experimental1194Service } from './experimental1194.service';

describe('Experimental1194Service', () => {
  let service: Experimental1194Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1194Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
