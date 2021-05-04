import { TestBed } from '@angular/core/testing';

import { Experimental559Service } from './experimental559.service';

describe('Experimental559Service', () => {
  let service: Experimental559Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental559Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
