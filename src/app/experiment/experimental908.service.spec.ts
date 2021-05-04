import { TestBed } from '@angular/core/testing';

import { Experimental908Service } from './experimental908.service';

describe('Experimental908Service', () => {
  let service: Experimental908Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental908Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
