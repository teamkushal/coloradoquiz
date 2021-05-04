import { TestBed } from '@angular/core/testing';

import { Experimental96Service } from './experimental96.service';

describe('Experimental96Service', () => {
  let service: Experimental96Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental96Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
