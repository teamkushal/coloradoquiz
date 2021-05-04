import { TestBed } from '@angular/core/testing';

import { Experimental3063Service } from './experimental3063.service';

describe('Experimental3063Service', () => {
  let service: Experimental3063Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3063Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
