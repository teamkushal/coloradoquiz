import { TestBed } from '@angular/core/testing';

import { Experimental3831Service } from './experimental3831.service';

describe('Experimental3831Service', () => {
  let service: Experimental3831Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3831Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
