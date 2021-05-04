import { TestBed } from '@angular/core/testing';

import { Experimental976Service } from './experimental976.service';

describe('Experimental976Service', () => {
  let service: Experimental976Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental976Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
