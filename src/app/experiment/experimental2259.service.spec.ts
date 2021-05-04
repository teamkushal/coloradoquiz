import { TestBed } from '@angular/core/testing';

import { Experimental2259Service } from './experimental2259.service';

describe('Experimental2259Service', () => {
  let service: Experimental2259Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2259Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
