import { TestBed } from '@angular/core/testing';

import { Experimental3490Service } from './experimental3490.service';

describe('Experimental3490Service', () => {
  let service: Experimental3490Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3490Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
