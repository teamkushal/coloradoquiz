import { TestBed } from '@angular/core/testing';

import { Experimental3830Service } from './experimental3830.service';

describe('Experimental3830Service', () => {
  let service: Experimental3830Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3830Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
