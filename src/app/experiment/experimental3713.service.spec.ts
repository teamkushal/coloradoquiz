import { TestBed } from '@angular/core/testing';

import { Experimental3713Service } from './experimental3713.service';

describe('Experimental3713Service', () => {
  let service: Experimental3713Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3713Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
