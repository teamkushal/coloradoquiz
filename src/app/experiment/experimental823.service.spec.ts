import { TestBed } from '@angular/core/testing';

import { Experimental823Service } from './experimental823.service';

describe('Experimental823Service', () => {
  let service: Experimental823Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental823Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
