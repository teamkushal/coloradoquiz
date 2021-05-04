import { TestBed } from '@angular/core/testing';

import { Experimental242Service } from './experimental242.service';

describe('Experimental242Service', () => {
  let service: Experimental242Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental242Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
