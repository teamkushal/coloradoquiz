import { TestBed } from '@angular/core/testing';

import { Experimental3250Service } from './experimental3250.service';

describe('Experimental3250Service', () => {
  let service: Experimental3250Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3250Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
