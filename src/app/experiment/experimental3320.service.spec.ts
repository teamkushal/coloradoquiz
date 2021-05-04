import { TestBed } from '@angular/core/testing';

import { Experimental3320Service } from './experimental3320.service';

describe('Experimental3320Service', () => {
  let service: Experimental3320Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3320Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
