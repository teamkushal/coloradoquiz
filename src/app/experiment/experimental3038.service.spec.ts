import { TestBed } from '@angular/core/testing';

import { Experimental3038Service } from './experimental3038.service';

describe('Experimental3038Service', () => {
  let service: Experimental3038Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3038Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
