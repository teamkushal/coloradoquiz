import { TestBed } from '@angular/core/testing';

import { Experimental999Service } from './experimental999.service';

describe('Experimental999Service', () => {
  let service: Experimental999Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental999Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
