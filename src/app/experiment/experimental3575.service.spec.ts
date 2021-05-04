import { TestBed } from '@angular/core/testing';

import { Experimental3575Service } from './experimental3575.service';

describe('Experimental3575Service', () => {
  let service: Experimental3575Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3575Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
