import { TestBed } from '@angular/core/testing';

import { Experimental3134Service } from './experimental3134.service';

describe('Experimental3134Service', () => {
  let service: Experimental3134Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3134Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
