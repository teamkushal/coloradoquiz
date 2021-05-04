import { TestBed } from '@angular/core/testing';

import { Experimental606Service } from './experimental606.service';

describe('Experimental606Service', () => {
  let service: Experimental606Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental606Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
