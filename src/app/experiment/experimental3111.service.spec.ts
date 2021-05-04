import { TestBed } from '@angular/core/testing';

import { Experimental3111Service } from './experimental3111.service';

describe('Experimental3111Service', () => {
  let service: Experimental3111Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3111Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
