import { TestBed } from '@angular/core/testing';

import { Experimental3391Service } from './experimental3391.service';

describe('Experimental3391Service', () => {
  let service: Experimental3391Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3391Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
