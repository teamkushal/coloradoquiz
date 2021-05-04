import { TestBed } from '@angular/core/testing';

import { Experimental917Service } from './experimental917.service';

describe('Experimental917Service', () => {
  let service: Experimental917Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental917Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
