import { TestBed } from '@angular/core/testing';

import { Experimental2757Service } from './experimental2757.service';

describe('Experimental2757Service', () => {
  let service: Experimental2757Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2757Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
