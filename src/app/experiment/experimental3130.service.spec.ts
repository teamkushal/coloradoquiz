import { TestBed } from '@angular/core/testing';

import { Experimental3130Service } from './experimental3130.service';

describe('Experimental3130Service', () => {
  let service: Experimental3130Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3130Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
