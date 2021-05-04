import { TestBed } from '@angular/core/testing';

import { Experimental3412Service } from './experimental3412.service';

describe('Experimental3412Service', () => {
  let service: Experimental3412Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3412Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
