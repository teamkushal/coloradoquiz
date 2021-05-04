import { TestBed } from '@angular/core/testing';

import { Experimental2981Service } from './experimental2981.service';

describe('Experimental2981Service', () => {
  let service: Experimental2981Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2981Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
