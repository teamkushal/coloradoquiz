import { TestBed } from '@angular/core/testing';

import { Experimental3064Service } from './experimental3064.service';

describe('Experimental3064Service', () => {
  let service: Experimental3064Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3064Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
