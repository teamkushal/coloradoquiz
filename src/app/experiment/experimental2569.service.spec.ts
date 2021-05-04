import { TestBed } from '@angular/core/testing';

import { Experimental2569Service } from './experimental2569.service';

describe('Experimental2569Service', () => {
  let service: Experimental2569Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2569Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
