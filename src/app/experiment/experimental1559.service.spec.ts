import { TestBed } from '@angular/core/testing';

import { Experimental1559Service } from './experimental1559.service';

describe('Experimental1559Service', () => {
  let service: Experimental1559Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1559Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
