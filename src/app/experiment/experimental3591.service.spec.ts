import { TestBed } from '@angular/core/testing';

import { Experimental3591Service } from './experimental3591.service';

describe('Experimental3591Service', () => {
  let service: Experimental3591Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3591Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
