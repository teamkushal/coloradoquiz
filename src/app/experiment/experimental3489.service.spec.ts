import { TestBed } from '@angular/core/testing';

import { Experimental3489Service } from './experimental3489.service';

describe('Experimental3489Service', () => {
  let service: Experimental3489Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3489Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
