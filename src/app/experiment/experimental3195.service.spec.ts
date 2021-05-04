import { TestBed } from '@angular/core/testing';

import { Experimental3195Service } from './experimental3195.service';

describe('Experimental3195Service', () => {
  let service: Experimental3195Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3195Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
