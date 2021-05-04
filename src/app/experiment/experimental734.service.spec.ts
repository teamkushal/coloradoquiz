import { TestBed } from '@angular/core/testing';

import { Experimental734Service } from './experimental734.service';

describe('Experimental734Service', () => {
  let service: Experimental734Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental734Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
