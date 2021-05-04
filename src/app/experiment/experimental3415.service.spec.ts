import { TestBed } from '@angular/core/testing';

import { Experimental3415Service } from './experimental3415.service';

describe('Experimental3415Service', () => {
  let service: Experimental3415Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3415Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
