import { TestBed } from '@angular/core/testing';

import { Experimental362Service } from './experimental362.service';

describe('Experimental362Service', () => {
  let service: Experimental362Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental362Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
