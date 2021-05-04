import { TestBed } from '@angular/core/testing';

import { Experimental276Service } from './experimental276.service';

describe('Experimental276Service', () => {
  let service: Experimental276Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental276Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
