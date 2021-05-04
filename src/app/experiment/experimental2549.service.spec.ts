import { TestBed } from '@angular/core/testing';

import { Experimental2549Service } from './experimental2549.service';

describe('Experimental2549Service', () => {
  let service: Experimental2549Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2549Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
