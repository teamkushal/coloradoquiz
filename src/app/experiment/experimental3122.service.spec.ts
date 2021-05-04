import { TestBed } from '@angular/core/testing';

import { Experimental3122Service } from './experimental3122.service';

describe('Experimental3122Service', () => {
  let service: Experimental3122Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3122Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
