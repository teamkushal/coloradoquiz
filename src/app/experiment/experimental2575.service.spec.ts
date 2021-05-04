import { TestBed } from '@angular/core/testing';

import { Experimental2575Service } from './experimental2575.service';

describe('Experimental2575Service', () => {
  let service: Experimental2575Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2575Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
