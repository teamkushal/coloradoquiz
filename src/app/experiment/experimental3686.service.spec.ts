import { TestBed } from '@angular/core/testing';

import { Experimental3686Service } from './experimental3686.service';

describe('Experimental3686Service', () => {
  let service: Experimental3686Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3686Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
