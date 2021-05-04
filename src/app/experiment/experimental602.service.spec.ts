import { TestBed } from '@angular/core/testing';

import { Experimental602Service } from './experimental602.service';

describe('Experimental602Service', () => {
  let service: Experimental602Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental602Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
