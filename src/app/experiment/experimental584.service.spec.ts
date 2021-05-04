import { TestBed } from '@angular/core/testing';

import { Experimental584Service } from './experimental584.service';

describe('Experimental584Service', () => {
  let service: Experimental584Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental584Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
