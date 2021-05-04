import { TestBed } from '@angular/core/testing';

import { Experimental301Service } from './experimental301.service';

describe('Experimental301Service', () => {
  let service: Experimental301Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental301Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
