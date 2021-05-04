import { TestBed } from '@angular/core/testing';

import { Experimental2991Service } from './experimental2991.service';

describe('Experimental2991Service', () => {
  let service: Experimental2991Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2991Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
