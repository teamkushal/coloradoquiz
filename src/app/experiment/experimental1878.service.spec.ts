import { TestBed } from '@angular/core/testing';

import { Experimental1878Service } from './experimental1878.service';

describe('Experimental1878Service', () => {
  let service: Experimental1878Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1878Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
