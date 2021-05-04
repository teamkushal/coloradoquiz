import { TestBed } from '@angular/core/testing';

import { Experimental3756Service } from './experimental3756.service';

describe('Experimental3756Service', () => {
  let service: Experimental3756Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3756Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
