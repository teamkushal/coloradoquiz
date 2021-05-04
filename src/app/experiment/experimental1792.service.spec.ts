import { TestBed } from '@angular/core/testing';

import { Experimental1792Service } from './experimental1792.service';

describe('Experimental1792Service', () => {
  let service: Experimental1792Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1792Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
