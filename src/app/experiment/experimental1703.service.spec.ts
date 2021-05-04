import { TestBed } from '@angular/core/testing';

import { Experimental1703Service } from './experimental1703.service';

describe('Experimental1703Service', () => {
  let service: Experimental1703Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1703Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
