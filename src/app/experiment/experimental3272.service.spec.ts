import { TestBed } from '@angular/core/testing';

import { Experimental3272Service } from './experimental3272.service';

describe('Experimental3272Service', () => {
  let service: Experimental3272Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3272Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
