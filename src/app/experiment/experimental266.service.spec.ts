import { TestBed } from '@angular/core/testing';

import { Experimental266Service } from './experimental266.service';

describe('Experimental266Service', () => {
  let service: Experimental266Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental266Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
