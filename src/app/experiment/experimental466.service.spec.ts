import { TestBed } from '@angular/core/testing';

import { Experimental466Service } from './experimental466.service';

describe('Experimental466Service', () => {
  let service: Experimental466Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental466Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
