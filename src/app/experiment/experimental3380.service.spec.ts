import { TestBed } from '@angular/core/testing';

import { Experimental3380Service } from './experimental3380.service';

describe('Experimental3380Service', () => {
  let service: Experimental3380Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3380Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
