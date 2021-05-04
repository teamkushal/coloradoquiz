import { TestBed } from '@angular/core/testing';

import { Experimental1735Service } from './experimental1735.service';

describe('Experimental1735Service', () => {
  let service: Experimental1735Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1735Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
