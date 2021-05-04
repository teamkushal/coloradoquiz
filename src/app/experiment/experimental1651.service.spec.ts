import { TestBed } from '@angular/core/testing';

import { Experimental1651Service } from './experimental1651.service';

describe('Experimental1651Service', () => {
  let service: Experimental1651Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1651Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
