import { TestBed } from '@angular/core/testing';

import { Experimental2911Service } from './experimental2911.service';

describe('Experimental2911Service', () => {
  let service: Experimental2911Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2911Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
