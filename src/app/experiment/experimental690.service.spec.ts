import { TestBed } from '@angular/core/testing';

import { Experimental690Service } from './experimental690.service';

describe('Experimental690Service', () => {
  let service: Experimental690Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental690Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
