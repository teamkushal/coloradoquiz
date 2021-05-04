import { TestBed } from '@angular/core/testing';

import { Experimental106Service } from './experimental106.service';

describe('Experimental106Service', () => {
  let service: Experimental106Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental106Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
