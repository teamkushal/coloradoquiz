import { TestBed } from '@angular/core/testing';

import { Experimental2945Service } from './experimental2945.service';

describe('Experimental2945Service', () => {
  let service: Experimental2945Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2945Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
