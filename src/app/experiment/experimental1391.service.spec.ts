import { TestBed } from '@angular/core/testing';

import { Experimental1391Service } from './experimental1391.service';

describe('Experimental1391Service', () => {
  let service: Experimental1391Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1391Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
