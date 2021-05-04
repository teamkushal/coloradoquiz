import { TestBed } from '@angular/core/testing';

import { Experimental642Service } from './experimental642.service';

describe('Experimental642Service', () => {
  let service: Experimental642Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental642Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
