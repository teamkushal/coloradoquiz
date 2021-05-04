import { TestBed } from '@angular/core/testing';

import { Experimental3351Service } from './experimental3351.service';

describe('Experimental3351Service', () => {
  let service: Experimental3351Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3351Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
