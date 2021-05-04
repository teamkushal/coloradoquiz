import { TestBed } from '@angular/core/testing';

import { Experimental3762Service } from './experimental3762.service';

describe('Experimental3762Service', () => {
  let service: Experimental3762Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3762Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
