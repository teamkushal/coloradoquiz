import { TestBed } from '@angular/core/testing';

import { Experimental2550Service } from './experimental2550.service';

describe('Experimental2550Service', () => {
  let service: Experimental2550Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2550Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
