import { TestBed } from '@angular/core/testing';

import { Experimental2434Service } from './experimental2434.service';

describe('Experimental2434Service', () => {
  let service: Experimental2434Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2434Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
