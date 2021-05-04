import { TestBed } from '@angular/core/testing';

import { Experimental2349Service } from './experimental2349.service';

describe('Experimental2349Service', () => {
  let service: Experimental2349Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2349Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
