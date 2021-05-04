import { TestBed } from '@angular/core/testing';

import { Experimental933Service } from './experimental933.service';

describe('Experimental933Service', () => {
  let service: Experimental933Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental933Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
