import { TestBed } from '@angular/core/testing';

import { Experimental3742Service } from './experimental3742.service';

describe('Experimental3742Service', () => {
  let service: Experimental3742Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3742Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
