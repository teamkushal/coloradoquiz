import { TestBed } from '@angular/core/testing';

import { Experimental637Service } from './experimental637.service';

describe('Experimental637Service', () => {
  let service: Experimental637Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental637Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
