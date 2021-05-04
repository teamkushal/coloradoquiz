import { TestBed } from '@angular/core/testing';

import { Experimental2759Service } from './experimental2759.service';

describe('Experimental2759Service', () => {
  let service: Experimental2759Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2759Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
