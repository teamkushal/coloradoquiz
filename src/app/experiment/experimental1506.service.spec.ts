import { TestBed } from '@angular/core/testing';

import { Experimental1506Service } from './experimental1506.service';

describe('Experimental1506Service', () => {
  let service: Experimental1506Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1506Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
