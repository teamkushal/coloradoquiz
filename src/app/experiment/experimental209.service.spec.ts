import { TestBed } from '@angular/core/testing';

import { Experimental209Service } from './experimental209.service';

describe('Experimental209Service', () => {
  let service: Experimental209Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental209Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
