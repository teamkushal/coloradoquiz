import { TestBed } from '@angular/core/testing';

import { Experimental3769Service } from './experimental3769.service';

describe('Experimental3769Service', () => {
  let service: Experimental3769Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3769Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
