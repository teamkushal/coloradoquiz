import { TestBed } from '@angular/core/testing';

import { Experimental846Service } from './experimental846.service';

describe('Experimental846Service', () => {
  let service: Experimental846Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental846Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
