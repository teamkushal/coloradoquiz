import { TestBed } from '@angular/core/testing';

import { Experimental3681Service } from './experimental3681.service';

describe('Experimental3681Service', () => {
  let service: Experimental3681Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3681Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
