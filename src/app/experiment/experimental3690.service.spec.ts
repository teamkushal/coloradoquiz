import { TestBed } from '@angular/core/testing';

import { Experimental3690Service } from './experimental3690.service';

describe('Experimental3690Service', () => {
  let service: Experimental3690Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3690Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
