import { TestBed } from '@angular/core/testing';

import { Experimental3557Service } from './experimental3557.service';

describe('Experimental3557Service', () => {
  let service: Experimental3557Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3557Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
