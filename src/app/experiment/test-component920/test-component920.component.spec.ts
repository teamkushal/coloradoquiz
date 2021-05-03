import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent920Component } from './test-component920.component';

describe('TestComponent920Component', () => {
  let component: TestComponent920Component;
  let fixture: ComponentFixture<TestComponent920Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent920Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
