import { TestBed } from '@angular/core/testing';

import { Experimental3544Service } from './experimental3544.service';

describe('Experimental3544Service', () => {
  let service: Experimental3544Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3544Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
