import { TestBed } from '@angular/core/testing';

import { Experimental807Service } from './experimental807.service';

describe('Experimental807Service', () => {
  let service: Experimental807Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental807Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
