import { TestBed } from '@angular/core/testing';

import { Experimental1150Service } from './experimental1150.service';

describe('Experimental1150Service', () => {
  let service: Experimental1150Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1150Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
