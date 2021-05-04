import { TestBed } from '@angular/core/testing';

import { Experimental3030Service } from './experimental3030.service';

describe('Experimental3030Service', () => {
  let service: Experimental3030Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3030Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
