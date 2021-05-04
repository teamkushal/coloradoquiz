import { TestBed } from '@angular/core/testing';

import { Experimental520Service } from './experimental520.service';

describe('Experimental520Service', () => {
  let service: Experimental520Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental520Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
