import { TestBed } from '@angular/core/testing';

import { Experimental2190Service } from './experimental2190.service';

describe('Experimental2190Service', () => {
  let service: Experimental2190Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2190Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
