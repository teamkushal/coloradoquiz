import { TestBed } from '@angular/core/testing';

import { Experimental99Service } from './experimental99.service';

describe('Experimental99Service', () => {
  let service: Experimental99Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental99Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
