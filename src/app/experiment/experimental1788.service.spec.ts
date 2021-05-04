import { TestBed } from '@angular/core/testing';

import { Experimental1788Service } from './experimental1788.service';

describe('Experimental1788Service', () => {
  let service: Experimental1788Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1788Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
