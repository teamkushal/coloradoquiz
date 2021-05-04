import { TestBed } from '@angular/core/testing';

import { Experimental3281Service } from './experimental3281.service';

describe('Experimental3281Service', () => {
  let service: Experimental3281Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3281Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
