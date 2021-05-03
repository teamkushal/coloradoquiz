import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent346Component } from './test-component346.component';

describe('TestComponent346Component', () => {
  let component: TestComponent346Component;
  let fixture: ComponentFixture<TestComponent346Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent346Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
