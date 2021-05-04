import { TestBed } from '@angular/core/testing';

import { Experimental1578Service } from './experimental1578.service';

describe('Experimental1578Service', () => {
  let service: Experimental1578Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1578Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
