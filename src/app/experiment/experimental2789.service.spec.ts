import { TestBed } from '@angular/core/testing';

import { Experimental2789Service } from './experimental2789.service';

describe('Experimental2789Service', () => {
  let service: Experimental2789Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2789Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
