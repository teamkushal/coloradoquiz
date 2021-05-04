import { TestBed } from '@angular/core/testing';

import { Experimental516Service } from './experimental516.service';

describe('Experimental516Service', () => {
  let service: Experimental516Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental516Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
