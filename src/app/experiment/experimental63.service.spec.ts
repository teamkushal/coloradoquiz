import { TestBed } from '@angular/core/testing';

import { Experimental63Service } from './experimental63.service';

describe('Experimental63Service', () => {
  let service: Experimental63Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental63Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
