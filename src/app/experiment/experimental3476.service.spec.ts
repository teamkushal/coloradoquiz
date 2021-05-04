import { TestBed } from '@angular/core/testing';

import { Experimental3476Service } from './experimental3476.service';

describe('Experimental3476Service', () => {
  let service: Experimental3476Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3476Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
