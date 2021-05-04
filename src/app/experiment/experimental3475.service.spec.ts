import { TestBed } from '@angular/core/testing';

import { Experimental3475Service } from './experimental3475.service';

describe('Experimental3475Service', () => {
  let service: Experimental3475Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3475Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
