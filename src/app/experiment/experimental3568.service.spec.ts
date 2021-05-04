import { TestBed } from '@angular/core/testing';

import { Experimental3568Service } from './experimental3568.service';

describe('Experimental3568Service', () => {
  let service: Experimental3568Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3568Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
