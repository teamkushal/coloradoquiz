import { TestBed } from '@angular/core/testing';

import { Experimental469Service } from './experimental469.service';

describe('Experimental469Service', () => {
  let service: Experimental469Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental469Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
