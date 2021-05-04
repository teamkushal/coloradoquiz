import { TestBed } from '@angular/core/testing';

import { Experimental1402Service } from './experimental1402.service';

describe('Experimental1402Service', () => {
  let service: Experimental1402Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1402Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
