import { TestBed } from '@angular/core/testing';

import { Experimental3607Service } from './experimental3607.service';

describe('Experimental3607Service', () => {
  let service: Experimental3607Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3607Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
