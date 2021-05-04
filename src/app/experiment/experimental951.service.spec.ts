import { TestBed } from '@angular/core/testing';

import { Experimental951Service } from './experimental951.service';

describe('Experimental951Service', () => {
  let service: Experimental951Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental951Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
