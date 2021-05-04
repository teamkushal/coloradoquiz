import { TestBed } from '@angular/core/testing';

import { Experimental8Service } from './experimental8.service';

describe('Experimental8Service', () => {
  let service: Experimental8Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental8Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
