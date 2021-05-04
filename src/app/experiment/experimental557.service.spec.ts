import { TestBed } from '@angular/core/testing';

import { Experimental557Service } from './experimental557.service';

describe('Experimental557Service', () => {
  let service: Experimental557Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental557Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
