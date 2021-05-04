import { TestBed } from '@angular/core/testing';

import { Experimental3335Service } from './experimental3335.service';

describe('Experimental3335Service', () => {
  let service: Experimental3335Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3335Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
