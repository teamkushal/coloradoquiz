import { TestBed } from '@angular/core/testing';

import { Experimental395Service } from './experimental395.service';

describe('Experimental395Service', () => {
  let service: Experimental395Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental395Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
