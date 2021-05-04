import { TestBed } from '@angular/core/testing';

import { Experimental708Service } from './experimental708.service';

describe('Experimental708Service', () => {
  let service: Experimental708Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental708Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
