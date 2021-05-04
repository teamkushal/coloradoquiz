import { TestBed } from '@angular/core/testing';

import { Experimental13Service } from './experimental13.service';

describe('Experimental13Service', () => {
  let service: Experimental13Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental13Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
