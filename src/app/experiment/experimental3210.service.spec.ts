import { TestBed } from '@angular/core/testing';

import { Experimental3210Service } from './experimental3210.service';

describe('Experimental3210Service', () => {
  let service: Experimental3210Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3210Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
