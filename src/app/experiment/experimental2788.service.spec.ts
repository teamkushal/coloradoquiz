import { TestBed } from '@angular/core/testing';

import { Experimental2788Service } from './experimental2788.service';

describe('Experimental2788Service', () => {
  let service: Experimental2788Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2788Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
