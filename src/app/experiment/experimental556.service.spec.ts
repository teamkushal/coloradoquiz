import { TestBed } from '@angular/core/testing';

import { Experimental556Service } from './experimental556.service';

describe('Experimental556Service', () => {
  let service: Experimental556Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental556Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
