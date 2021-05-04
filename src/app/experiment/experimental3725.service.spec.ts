import { TestBed } from '@angular/core/testing';

import { Experimental3725Service } from './experimental3725.service';

describe('Experimental3725Service', () => {
  let service: Experimental3725Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3725Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
