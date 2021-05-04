import { TestBed } from '@angular/core/testing';

import { Experimental3163Service } from './experimental3163.service';

describe('Experimental3163Service', () => {
  let service: Experimental3163Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3163Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
