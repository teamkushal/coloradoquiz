import { TestBed } from '@angular/core/testing';

import { Experimental1500Service } from './experimental1500.service';

describe('Experimental1500Service', () => {
  let service: Experimental1500Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1500Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
