import { TestBed } from '@angular/core/testing';

import { Experimental2923Service } from './experimental2923.service';

describe('Experimental2923Service', () => {
  let service: Experimental2923Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2923Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
