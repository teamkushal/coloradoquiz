import { TestBed } from '@angular/core/testing';

import { Experimental204Service } from './experimental204.service';

describe('Experimental204Service', () => {
  let service: Experimental204Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental204Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
