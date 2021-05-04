import { TestBed } from '@angular/core/testing';

import { Experimental778Service } from './experimental778.service';

describe('Experimental778Service', () => {
  let service: Experimental778Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental778Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
