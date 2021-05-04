import { TestBed } from '@angular/core/testing';

import { Experimental3162Service } from './experimental3162.service';

describe('Experimental3162Service', () => {
  let service: Experimental3162Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3162Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
