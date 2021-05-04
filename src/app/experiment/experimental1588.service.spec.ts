import { TestBed } from '@angular/core/testing';

import { Experimental1588Service } from './experimental1588.service';

describe('Experimental1588Service', () => {
  let service: Experimental1588Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1588Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
