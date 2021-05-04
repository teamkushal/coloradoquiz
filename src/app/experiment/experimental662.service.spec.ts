import { TestBed } from '@angular/core/testing';

import { Experimental662Service } from './experimental662.service';

describe('Experimental662Service', () => {
  let service: Experimental662Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental662Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
