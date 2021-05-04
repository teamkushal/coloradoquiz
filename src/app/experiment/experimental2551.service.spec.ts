import { TestBed } from '@angular/core/testing';

import { Experimental2551Service } from './experimental2551.service';

describe('Experimental2551Service', () => {
  let service: Experimental2551Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2551Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
