import { TestBed } from '@angular/core/testing';

import { Experimental3077Service } from './experimental3077.service';

describe('Experimental3077Service', () => {
  let service: Experimental3077Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3077Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
