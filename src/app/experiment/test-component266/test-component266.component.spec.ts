import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent266Component } from './test-component266.component';

describe('TestComponent266Component', () => {
  let component: TestComponent266Component;
  let fixture: ComponentFixture<TestComponent266Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent266Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
