import { TestBed } from '@angular/core/testing';

import { Experimental3446Service } from './experimental3446.service';

describe('Experimental3446Service', () => {
  let service: Experimental3446Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3446Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
