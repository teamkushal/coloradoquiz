import { TestBed } from '@angular/core/testing';

import { Experimental3632Service } from './experimental3632.service';

describe('Experimental3632Service', () => {
  let service: Experimental3632Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3632Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
