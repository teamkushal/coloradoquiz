import { TestBed } from '@angular/core/testing';

import { Experimental3555Service } from './experimental3555.service';

describe('Experimental3555Service', () => {
  let service: Experimental3555Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3555Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
