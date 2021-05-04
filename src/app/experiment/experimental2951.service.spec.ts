import { TestBed } from '@angular/core/testing';

import { Experimental2951Service } from './experimental2951.service';

describe('Experimental2951Service', () => {
  let service: Experimental2951Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2951Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
