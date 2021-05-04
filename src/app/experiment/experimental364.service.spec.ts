import { TestBed } from '@angular/core/testing';

import { Experimental364Service } from './experimental364.service';

describe('Experimental364Service', () => {
  let service: Experimental364Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental364Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
