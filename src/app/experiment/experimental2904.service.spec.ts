import { TestBed } from '@angular/core/testing';

import { Experimental2904Service } from './experimental2904.service';

describe('Experimental2904Service', () => {
  let service: Experimental2904Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2904Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
