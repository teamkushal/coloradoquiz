import { TestBed } from '@angular/core/testing';

import { Experimental2372Service } from './experimental2372.service';

describe('Experimental2372Service', () => {
  let service: Experimental2372Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2372Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
