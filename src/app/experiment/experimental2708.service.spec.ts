import { TestBed } from '@angular/core/testing';

import { Experimental2708Service } from './experimental2708.service';

describe('Experimental2708Service', () => {
  let service: Experimental2708Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2708Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
