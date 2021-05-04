import { TestBed } from '@angular/core/testing';

import { Experimental3998Service } from './experimental3998.service';

describe('Experimental3998Service', () => {
  let service: Experimental3998Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3998Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
