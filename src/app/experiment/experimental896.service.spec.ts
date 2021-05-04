import { TestBed } from '@angular/core/testing';

import { Experimental896Service } from './experimental896.service';

describe('Experimental896Service', () => {
  let service: Experimental896Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental896Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
