import { TestBed } from '@angular/core/testing';

import { Experimental3768Service } from './experimental3768.service';

describe('Experimental3768Service', () => {
  let service: Experimental3768Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3768Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
