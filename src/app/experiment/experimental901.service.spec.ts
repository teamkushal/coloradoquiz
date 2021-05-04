import { TestBed } from '@angular/core/testing';

import { Experimental901Service } from './experimental901.service';

describe('Experimental901Service', () => {
  let service: Experimental901Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental901Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
