import { TestBed } from '@angular/core/testing';

import { Experimental3062Service } from './experimental3062.service';

describe('Experimental3062Service', () => {
  let service: Experimental3062Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3062Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
