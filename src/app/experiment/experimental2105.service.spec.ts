import { TestBed } from '@angular/core/testing';

import { Experimental2105Service } from './experimental2105.service';

describe('Experimental2105Service', () => {
  let service: Experimental2105Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2105Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
