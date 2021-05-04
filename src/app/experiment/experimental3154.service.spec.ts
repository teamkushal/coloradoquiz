import { TestBed } from '@angular/core/testing';

import { Experimental3154Service } from './experimental3154.service';

describe('Experimental3154Service', () => {
  let service: Experimental3154Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3154Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
