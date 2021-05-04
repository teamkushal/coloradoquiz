import { TestBed } from '@angular/core/testing';

import { Experimental3912Service } from './experimental3912.service';

describe('Experimental3912Service', () => {
  let service: Experimental3912Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3912Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
