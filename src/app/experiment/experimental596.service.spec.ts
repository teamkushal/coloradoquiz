import { TestBed } from '@angular/core/testing';

import { Experimental596Service } from './experimental596.service';

describe('Experimental596Service', () => {
  let service: Experimental596Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental596Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
