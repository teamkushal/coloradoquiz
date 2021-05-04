import { TestBed } from '@angular/core/testing';

import { Experimental3034Service } from './experimental3034.service';

describe('Experimental3034Service', () => {
  let service: Experimental3034Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3034Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
