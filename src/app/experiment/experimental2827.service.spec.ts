import { TestBed } from '@angular/core/testing';

import { Experimental2827Service } from './experimental2827.service';

describe('Experimental2827Service', () => {
  let service: Experimental2827Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2827Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
