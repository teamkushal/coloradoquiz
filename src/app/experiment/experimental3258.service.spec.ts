import { TestBed } from '@angular/core/testing';

import { Experimental3258Service } from './experimental3258.service';

describe('Experimental3258Service', () => {
  let service: Experimental3258Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3258Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
