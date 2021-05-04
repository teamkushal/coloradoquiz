import { TestBed } from '@angular/core/testing';

import { Experimental1713Service } from './experimental1713.service';

describe('Experimental1713Service', () => {
  let service: Experimental1713Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1713Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
