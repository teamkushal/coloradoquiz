import { TestBed } from '@angular/core/testing';

import { Experimental1861Service } from './experimental1861.service';

describe('Experimental1861Service', () => {
  let service: Experimental1861Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1861Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
