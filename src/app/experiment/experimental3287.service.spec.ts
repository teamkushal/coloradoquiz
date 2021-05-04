import { TestBed } from '@angular/core/testing';

import { Experimental3287Service } from './experimental3287.service';

describe('Experimental3287Service', () => {
  let service: Experimental3287Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3287Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
