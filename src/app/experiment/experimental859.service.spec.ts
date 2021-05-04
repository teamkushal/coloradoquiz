import { TestBed } from '@angular/core/testing';

import { Experimental859Service } from './experimental859.service';

describe('Experimental859Service', () => {
  let service: Experimental859Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental859Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
