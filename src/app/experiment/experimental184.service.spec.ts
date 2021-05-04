import { TestBed } from '@angular/core/testing';

import { Experimental184Service } from './experimental184.service';

describe('Experimental184Service', () => {
  let service: Experimental184Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental184Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
