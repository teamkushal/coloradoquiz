import { TestBed } from '@angular/core/testing';

import { Experimental580Service } from './experimental580.service';

describe('Experimental580Service', () => {
  let service: Experimental580Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental580Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
