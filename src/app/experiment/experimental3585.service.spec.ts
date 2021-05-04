import { TestBed } from '@angular/core/testing';

import { Experimental3585Service } from './experimental3585.service';

describe('Experimental3585Service', () => {
  let service: Experimental3585Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3585Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
