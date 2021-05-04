import { TestBed } from '@angular/core/testing';

import { Experimental3350Service } from './experimental3350.service';

describe('Experimental3350Service', () => {
  let service: Experimental3350Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3350Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
