import { TestBed } from '@angular/core/testing';

import { Experimental936Service } from './experimental936.service';

describe('Experimental936Service', () => {
  let service: Experimental936Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental936Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
