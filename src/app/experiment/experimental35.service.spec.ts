import { TestBed } from '@angular/core/testing';

import { Experimental35Service } from './experimental35.service';

describe('Experimental35Service', () => {
  let service: Experimental35Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental35Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
