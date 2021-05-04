import { TestBed } from '@angular/core/testing';

import { Experimental2000Service } from './experimental2000.service';

describe('Experimental2000Service', () => {
  let service: Experimental2000Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2000Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
