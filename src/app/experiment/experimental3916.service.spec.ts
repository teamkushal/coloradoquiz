import { TestBed } from '@angular/core/testing';

import { Experimental3916Service } from './experimental3916.service';

describe('Experimental3916Service', () => {
  let service: Experimental3916Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3916Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
