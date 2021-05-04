import { TestBed } from '@angular/core/testing';

import { Experimental831Service } from './experimental831.service';

describe('Experimental831Service', () => {
  let service: Experimental831Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental831Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
