import { TestBed } from '@angular/core/testing';

import { Experimental3451Service } from './experimental3451.service';

describe('Experimental3451Service', () => {
  let service: Experimental3451Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3451Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
