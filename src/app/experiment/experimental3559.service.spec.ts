import { TestBed } from '@angular/core/testing';

import { Experimental3559Service } from './experimental3559.service';

describe('Experimental3559Service', () => {
  let service: Experimental3559Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3559Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
