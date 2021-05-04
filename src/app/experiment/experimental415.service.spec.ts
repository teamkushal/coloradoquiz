import { TestBed } from '@angular/core/testing';

import { Experimental415Service } from './experimental415.service';

describe('Experimental415Service', () => {
  let service: Experimental415Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental415Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
