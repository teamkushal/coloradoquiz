import { TestBed } from '@angular/core/testing';

import { Experimental49Service } from './experimental49.service';

describe('Experimental49Service', () => {
  let service: Experimental49Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental49Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
