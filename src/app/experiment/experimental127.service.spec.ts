import { TestBed } from '@angular/core/testing';

import { Experimental127Service } from './experimental127.service';

describe('Experimental127Service', () => {
  let service: Experimental127Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental127Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
