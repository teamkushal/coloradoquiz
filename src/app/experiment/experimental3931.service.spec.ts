import { TestBed } from '@angular/core/testing';

import { Experimental3931Service } from './experimental3931.service';

describe('Experimental3931Service', () => {
  let service: Experimental3931Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3931Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
