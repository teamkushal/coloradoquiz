import { TestBed } from '@angular/core/testing';

import { Experimental3018Service } from './experimental3018.service';

describe('Experimental3018Service', () => {
  let service: Experimental3018Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3018Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
