import { TestBed } from '@angular/core/testing';

import { Experimental3959Service } from './experimental3959.service';

describe('Experimental3959Service', () => {
  let service: Experimental3959Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3959Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
