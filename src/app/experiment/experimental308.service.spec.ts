import { TestBed } from '@angular/core/testing';

import { Experimental308Service } from './experimental308.service';

describe('Experimental308Service', () => {
  let service: Experimental308Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental308Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
