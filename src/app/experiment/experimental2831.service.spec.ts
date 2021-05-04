import { TestBed } from '@angular/core/testing';

import { Experimental2831Service } from './experimental2831.service';

describe('Experimental2831Service', () => {
  let service: Experimental2831Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2831Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
