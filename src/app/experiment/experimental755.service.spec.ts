import { TestBed } from '@angular/core/testing';

import { Experimental755Service } from './experimental755.service';

describe('Experimental755Service', () => {
  let service: Experimental755Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental755Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
