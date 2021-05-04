import { TestBed } from '@angular/core/testing';

import { Experimental3375Service } from './experimental3375.service';

describe('Experimental3375Service', () => {
  let service: Experimental3375Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3375Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
