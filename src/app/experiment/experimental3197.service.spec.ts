import { TestBed } from '@angular/core/testing';

import { Experimental3197Service } from './experimental3197.service';

describe('Experimental3197Service', () => {
  let service: Experimental3197Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3197Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
