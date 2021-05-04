import { TestBed } from '@angular/core/testing';

import { Experimental68Service } from './experimental68.service';

describe('Experimental68Service', () => {
  let service: Experimental68Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental68Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
