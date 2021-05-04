import { TestBed } from '@angular/core/testing';

import { Experimental692Service } from './experimental692.service';

describe('Experimental692Service', () => {
  let service: Experimental692Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental692Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
