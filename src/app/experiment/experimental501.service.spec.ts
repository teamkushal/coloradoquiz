import { TestBed } from '@angular/core/testing';

import { Experimental501Service } from './experimental501.service';

describe('Experimental501Service', () => {
  let service: Experimental501Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental501Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
