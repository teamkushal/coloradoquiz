import { TestBed } from '@angular/core/testing';

import { Experimental400Service } from './experimental400.service';

describe('Experimental400Service', () => {
  let service: Experimental400Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental400Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
