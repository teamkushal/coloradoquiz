import { TestBed } from '@angular/core/testing';

import { Experimental615Service } from './experimental615.service';

describe('Experimental615Service', () => {
  let service: Experimental615Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental615Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
