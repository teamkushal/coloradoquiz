import { TestBed } from '@angular/core/testing';

import { Experimental3716Service } from './experimental3716.service';

describe('Experimental3716Service', () => {
  let service: Experimental3716Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3716Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
