import { TestBed } from '@angular/core/testing';

import { Experimental2855Service } from './experimental2855.service';

describe('Experimental2855Service', () => {
  let service: Experimental2855Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2855Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
