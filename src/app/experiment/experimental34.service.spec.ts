import { TestBed } from '@angular/core/testing';

import { Experimental34Service } from './experimental34.service';

describe('Experimental34Service', () => {
  let service: Experimental34Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental34Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
