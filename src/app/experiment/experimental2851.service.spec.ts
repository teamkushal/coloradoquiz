import { TestBed } from '@angular/core/testing';

import { Experimental2851Service } from './experimental2851.service';

describe('Experimental2851Service', () => {
  let service: Experimental2851Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2851Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
