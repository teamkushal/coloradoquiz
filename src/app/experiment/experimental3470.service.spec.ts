import { TestBed } from '@angular/core/testing';

import { Experimental3470Service } from './experimental3470.service';

describe('Experimental3470Service', () => {
  let service: Experimental3470Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3470Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
