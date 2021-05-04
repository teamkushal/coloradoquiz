import { TestBed } from '@angular/core/testing';

import { Experimental485Service } from './experimental485.service';

describe('Experimental485Service', () => {
  let service: Experimental485Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental485Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
