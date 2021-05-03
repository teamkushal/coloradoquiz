import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent34Component } from './test-component34.component';

describe('TestComponent34Component', () => {
  let component: TestComponent34Component;
  let fixture: ComponentFixture<TestComponent34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent34Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
